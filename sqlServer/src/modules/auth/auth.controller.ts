import type { Request, Response } from "express";
import sendRespond from "../../utility/sendResponse";
import { authService } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authService.loginUserIntoDB(req.body);
    return sendRespond(
      res,
      201,
      true,
      " Successfully!..",
      result,
    );
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
};
export const authController = {
  loginUser,
};
