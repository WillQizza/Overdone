import { Request, Response } from "express";
import { genSalt, hash, compare } from "bcrypt";

import { getConnection } from "../database";
import { hasPayload, logError, respondWithError, respondWithSuccess } from "../utils";
import { APIAuthenticationRetrievePayload } from "overdone-common";
import { RowDataPacket } from "mysql2";

interface AuthorizeDataRowPacket extends RowDataPacket {
  userId: number;
  passwordHash: string;
}

export async function onLogin(req : Request, res : Response) {
  if (!hasPayload(req.body, { username: "string", password: "string" })) {
    return respondWithError(res, "Missing properties");
  }

  const connection = await getConnection();
  try {
    const { username, password } : APIAuthenticationRetrievePayload = req.body;
    const [ [ { userId, passwordHash } ] ] = await connection.query<AuthorizeDataRowPacket[]>("SELECT user_id AS userId, password_hash AS passwordHash FROM `users` WHERE LOWER(username) = LOWER(?)", [ username ]);
    
    if (!req.headers["user-agent"]) {
      return respondWithError(res, "Invalid request");
    }

    const isSamePassword = await compare(password, passwordHash);
    if (!isSamePassword) {
      return respondWithError(res, "Invalid credentials", 401);
    }

    req.session["userId"] = userId;
    req.session["userAgent"] = req.headers["user-agent"];

    return respondWithSuccess(res, {});
  } finally {
    connection.release();
  }
}

export function onLogout(req : Request, res : Response) {
  if (!req.session["userId"]) {
    return respondWithError(res, "Not authenticated", 401);
  }

  req.session.destroy(err => {
    if (err != null) {
      logError("An error occurred while attempting to destroy a session.", err);
      respondWithError(res, "Internal Error", 500);
      return;
    }
    
    respondWithSuccess(res, {});
  });
}