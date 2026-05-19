import type { NextFunction, Request, Response } from "express";
import sendRespond from "../utility/sendResponse";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log("this is protected route");
    // console.log(req.headers.authorization);
    const token = req.headers.authorization;

    if (!token) {
      return sendRespond(res, 401, false, "Unauthorized access!..");
    }

    next();
  };
};
export default auth;
