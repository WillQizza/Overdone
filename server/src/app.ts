import express from "express";

import { WEBSITE_PORT } from "./config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(WEBSITE_PORT);