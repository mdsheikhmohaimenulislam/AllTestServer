import { Router } from "express";

import { userController } from "./user.controller";
import auth from "../../middleware/auth";

const route = Router();

route.post("/", userController.createUser);
route.get("/", auth(),userController.getAllUsers);
route.get("/:id", userController.getSingleUser);
route.put("/:id", userController.updatedUser);
route.delete("/:id", userController.userDeleted);

export const userRoute = route;
