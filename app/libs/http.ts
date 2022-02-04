import { Request, Response } from "express";

export interface Http {
  request: Request;
  response: Response;
}
