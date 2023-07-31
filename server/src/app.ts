import express from "express";
import routes from "./routes";
import { session } from "./middleware";
import { initMigrations } from "./database";
import { WEBSITE_PORT } from "./config";

import { APIAuthenticationCreatePayload } from "overdone-common";

const app = express();
app.use(session());
app.use(routes);

initMigrations().then(() => app.listen(WEBSITE_PORT));