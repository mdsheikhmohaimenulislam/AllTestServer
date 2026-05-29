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

    return sendRespond(res, {
      status: 201,
      success: true,
      message: "User login Successfully!..",
      data: result,
    });
  } catch (error: any) {
    sendRespond(res, {
      status: 500,
      success: false,
      message: "User Not Found!..",
    });
  }
};

const refreshToken = async (req: Request, res: Response) => {
  try {
    const result = await authService.generateRefreshToken(
      req.cookies.refreshToken,
    );

    return sendRespond(res, {
      status: 201,
      success: true,
      message: "Access token generated!..",
      data: result,
    });
  } catch (error: any) {
    sendRespond(res, {
      status: 500,
      success: false,
      message: "User Not Found!..",
    });
  }
};

export const authController = {
  loginUser,
  // refreshToken,
};
