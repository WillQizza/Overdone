import { Request, Response } from "express";

import { getConnection } from "../database";
import { hasPayload, respondWithError } from "../utils";

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
  
  const { username, password } = req.body;

  const connection = await getConnection();
  try {
    
  } finally {
    connection.release();
  }
}

export function onTokenRevoke(req : Request, res : Response) {
  
}