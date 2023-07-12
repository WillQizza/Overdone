import express from "express";
import routes from "./routes";

import { WEBSITE_PORT } from "./config";

const app = express();
app.use(routes);

app.listen(WEBSITE_PORT);
