import { Request, Response } from "express";

import { getConnection } from "../database";
import { hasPayload, respondWithError } from "../utils";
import { APIAuthenticationRetrievePayload } from "overdone-common";

export async function onTokenRegister(req : Request, res : Response) {
  const connection = await getConnection();
  try {
    
  } finally {
    connection.release();
  }
}

export async function onTokenAuthorize(req : Request, res : Response) {
  if (!hasPayload(req.body, { username: "string", password: "string" })) {
    return respondWithError(res, "Missing properties");
  }
  
  const { username, password } : APIAuthenticationRetrievePayload = req.body;

  const connection = await getConnection();
  try {
    const [ data ] = await connection.query("SELECT user_id, password_hash FROM `users` WHERE LOWER(username) = LOWER(?)", [ username ]);
    console.log(data);
  } finally {
    connection.release();
  }
}

export function onTokenRevoke(req : Request, res : Response) {
  
}