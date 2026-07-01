import { NextFunction, Request, RequestHandler, Response } from "express";
import HttpStatus from "http-status";

//...............Higher-Order Function (HOF) is a function that..............
 
export const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error)
    }
  };
};

