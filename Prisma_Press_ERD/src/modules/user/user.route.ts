import { NextFunction, Request, Response, Router } from "express";
import { userController } from "./user.controller";
import { jwtUtils } from "../../utils/jwt";
import config from "../../config";
import { Role } from "../../../generated/prisma/enums";
import httpStatus from "http-status";

const route = Router();

declare global {
  namespace Express {
    interface Request {
      user?: {
        email: string;
        id: string;
        name: string;
        role: Role;
      };
    }
  }
}

route.post("/register", userController.registerUser);
route.get(
  "/me",
  (req: Request, res: Response, next: NextFunction) => {
    const { accessToken } = req.cookies;
    const verifiedToken = jwtUtils.verifyToken(
      accessToken,
      config.jwt_access_secret,
    );

    if (typeof verifiedToken === "string") {
      throw new Error(verifiedToken);
    }

    const { name, email, id, role } = verifiedToken;

    const requiredRoles = [Role.ADMIN, Role.AUTHOR, Role.USER];

    if (!requiredRoles.includes(role)) {
      return res.status(403).json({
        success: true,
        statusCode: httpStatus.FORBIDDEN,
        message:
          "Forbidden, yot don't have permission to access this resource.",
      });
    }

    req.user = {
      email,
      id,
      name,
      role,
    };

    next();
  },
  userController.getMyProfile,
);

export const userRouters = route;
