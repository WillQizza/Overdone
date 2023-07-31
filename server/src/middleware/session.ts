import expressSession from "express-session";
import { WEBSITE_DOMAIN, WEBSITE_SESSION_SECRET, WEBSITE_SESSION_LIFESPAN } from "../config";

export default function session() {
  return expressSession({
    name: "overdone-session",
    secret: WEBSITE_SESSION_SECRET,
    cookie: {
      path: "/",
      domain: WEBSITE_DOMAIN,
      maxAge: WEBSITE_SESSION_LIFESPAN
    },
    resave: false,
    saveUninitialized: false
  });
};