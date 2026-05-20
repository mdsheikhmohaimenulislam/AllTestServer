import type { NextFunction, Request, Response } from "express";
import sendRespond from "../utility/sendResponse";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config";
import { pool } from "../db";
import type { Role } from "../modules/user/user.interface";

const auth = (...role:Role[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req);
    try {
      // console.log("this is protected route");
      // console.log(req.headers.authorization);

      /*  1. Check if the token exists
 2. Verify the token
 3. Find the user into database
 4. If the user active or noth */

      const token = req.headers.authorization;

      if (!token) {
        return sendRespond(res, {status:401, success:false, message:"Unauthorized access!.."});
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
        return sendRespond(res, {status:404, success:false, message:"user not found!.."});
      }

      if (!user.is_active) {
        return sendRespond(res,{ status:403, success:false, message:"Forbidden!.."});
      }



      if(role.length && !role.includes(user.role)){
         return sendRespond(res,{ status:403, success:false, message:"Forbidden!.."});
      }

      req.user = decoded;

      next();
    } catch (error) {
      return sendRespond(res, {status:401, success:false, message:"Invalid token"});
    }
  };
};
export default auth;
