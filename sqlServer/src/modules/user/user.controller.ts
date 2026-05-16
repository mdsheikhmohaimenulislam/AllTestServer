import type { Request, Response } from "express";
import sendRespond from "../../utility/sendResponse";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  //   console.log(req.body);

  try {
    const result = await userService.createUserIntoDB(req.body);
    sendRespond(res, 201, true, "User Created Successfully.", result.rows[0]);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
};

export const userController = {
  createUser,
};
