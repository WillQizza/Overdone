import { Request, Response } from "express";

import { getConnection } from "../database";

export async function onTokenRegister(req : Request, res : Response) {
  const connection = await getConnection();
  try {

  } finally {
    connection.release();
  }
}

export function onTokenAuthorize(req : Request, res : Response) {
  
}

export function onTokenRevoke(req : Request, res : Response) {
  
}