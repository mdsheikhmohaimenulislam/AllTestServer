import { Router, type Request, type Response } from "express";
import { pool } from "../../db";
import sendRespond from "../../utility/sendResponse";
import { userController } from "./user.controller";

const route = Router();

route.post("/", userController.createUser);

export const userRoute = route;
