import type { NextFunction, Request, Response } from "express";
import sendRespond from "../utility/sendResponse";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config";
import { pool } from "../db";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // console.log("this is protected route");
      // console.log(req.headers.authorization);

      /*  1. Check if the token exists
 2. Verify the token
 3. Find the user into database
 4. If the user active or noth */

      const token = req.headers.authorization;

      if (!token) {
        return sendRespond(res, 401, false, "Unauthorized access!..");
      }

      const decoded = jwt.verify(
        token as string,
        config.JWT_SECRET as string,
      ) as JwtPayload;
      // console.log(decoded);
      const userData = await pool.query(
        `
        SELECT * FROM users WHERE email=$1
        `,
        [decoded.email],
      );

      const user = userData.rows[0];
      // console.log(user);

      if (userData.rows.length === 0) {
        return sendRespond(res, 404, false, "user not found!..");
      }

      if (!user.is_active) {
        return sendRespond(res, 403, false, "Forbidden!..");
      }

      req.user = decoded;

      next();
    } catch (error) {
      next(error);
    }
  };
};
export default auth;
