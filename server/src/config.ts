import dotenv from "dotenv";
dotenv.config();

export const WEBSITE_PORT = parseInt(process.env.PORT || "3001");