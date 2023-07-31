import { Response } from "express";

export function respondWithSuccess(res: Response, data: object) {
  return res.send({
    status: "ok",
    data
  });
}

export function respondWithError(res: Response, message: string, status: number = 400) {
  return res.status(status).send({
    status: "error",
    data: {
      message
    }
  });
}