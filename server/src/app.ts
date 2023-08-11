import express from "express";
import routes from "./routes";
import { session } from "./middleware";
import { initDatabaseData, initMigrations } from "./database";
import { WEBSITE_PORT } from "./config";

const app = express();
app.use(session());
app.use(routes);

initMigrations()
  .then(initDatabaseData)
  .then(() => app.listen(WEBSITE_PORT));