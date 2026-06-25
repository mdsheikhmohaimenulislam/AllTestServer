import { Router } from "express";
import { userController } from "./user.controller";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middleWares/auth";

const route = Router();

route.post("/register", userController.registerUser);
route.get(
  "/me",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  userController.getMyProfile,
);

route.put(
  "/my-profile",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  userController.updateMyProfile,
);

export const userRouters = route;
