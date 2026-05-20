import type { Request, Response } from "express";
import sendRespond from "../../utility/sendResponse";
import { authService } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authService.loginUserIntoDB(req.body);

    const { refreshToken } = result;

    res.cookie("refreshToken", refreshToken, {
      secure: false,
      httpOnly: true,
      sameSite: "lax",
    });

    return sendRespond(res, 201, true, "User login Successfully!..", result);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
};

const refreshToken = async (req: Request, res: Response) => {
  try {
    const result = await authService.generateRefreshToken(
      req.cookies.refreshToken,
    );

    return sendRespond(res, 201, true, "Access token generated!..", result);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
};

export const authController = {
  loginUser,
  refreshToken,
};
