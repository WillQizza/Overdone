import dotenv from "dotenv";
dotenv.config();

function ensureEnvExists(obj: string | undefined) {
  if (typeof obj === "undefined") {
    throw new Error("Please ensure you have configured all of your environment variables.");
  }

  return obj;
}

export const WEBSITE_PORT = parseInt(process.env.WEBSITE_PORT || "3001");
export const WEBSITE_DOMAIN = ensureEnvExists(process.env.WEBSITE_DOMAIN);
export const WEBSITE_SESSION_LIFESPAN = parseInt(process.env.WEBSITE_SESSION_LIFESPAN || "604800000");  // defaults to 1 week
export const WEBSITE_SESSION_SECRET = ensureEnvExists(process.env.WEBSITE_SESSION_SECRET);

export const DATABASE_HOST = ensureEnvExists(process.env.DATABASE_HOST);
export const DATABASE_PORT = parseInt(process.env.DATABASE_PORT || "3306");
export const DATABASE_NAME = ensureEnvExists(process.env.DATABASE_NAME);
export const DATABASE_USERNAME = ensureEnvExists(process.env.DATABASE_USERNAME);
export const DATABASE_PASSWORD = ensureEnvExists(process.env.DATABASE_PASSWORD);