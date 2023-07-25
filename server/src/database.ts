import * as path from "path";
import * as fs from "fs";

import { RowDataPacket, createConnection, createPool } from "mysql2/promise";
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from "./config";

interface MigrationRow extends RowDataPacket {
  nextMigrationId: number;
}

const MIGRATIONS_DIRECTORY = path.join(__dirname, "migrations");

const databaseCredentials = {
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  database: DATABASE_NAME,
  user: DATABASE_USERNAME,
  password: DATABASE_PASSWORD
};
const database = createPool(databaseCredentials);

export function getConnection() {
  return database.getConnection();
}

export async function initMigrations() {
  const connection = await createConnection({
    ...databaseCredentials,
    multipleStatements: true
  });
  await connection.connect();

  try {
    await connection.execute(`CREATE TABLE IF NOT EXISTS migrations (
      id INT NOT NULL AUTO_INCREMENT,
      PRIMARY KEY (id)
    )`);
  
    const [ [ { nextMigrationId } ] ] = await connection.query<MigrationRow[]>(`SELECT IFNULL((SELECT MAX(id) AS id FROM migrations), 0) + 1 AS nextMigrationId LIMIT 1`);
  
    // Find the migrations that were not ran yet.
    const unresolvedMigrations = fs.readdirSync(MIGRATIONS_DIRECTORY)
      .map(migrationFileName => ({
        id: parseInt(migrationFileName.split("-")[0]),
        path: path.join(MIGRATIONS_DIRECTORY, migrationFileName)
      }))
      .filter(migration => migration.id >= nextMigrationId)
      .sort((a, b) => a.id - b.id)
      .map(migration => ({
        ...migration,
        sql: fs.readFileSync(migration.path, "utf-8")
      }));
  
    for (const migration of unresolvedMigrations) {
      try {
        await connection.beginTransaction();
        await connection.query(migration.sql);
        await connection.commit();
      } catch (exception) {
        await connection.rollback();
        throw new Error(`Failed to apply migration: ${migration.id}`, {
          cause: exception
        });
      }
  
      await connection.execute("INSERT INTO migrations (id) VALUES (?)", [migration.id]);
    }
  } finally {
    await connection.end();
  }
}