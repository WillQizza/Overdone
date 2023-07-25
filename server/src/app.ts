import express from "express";
import routes from "./routes";
import { initMigrations } from "./database";
import { WEBSITE_PORT } from "./config";

const app = express();
app.use(routes);

initMigrations().then(() => app.listen(WEBSITE_PORT));