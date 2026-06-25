import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status";
import { userService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import config from "../../config";
import { jwtUtils } from "../../utils/jwt";
import httpStatus from "http-status";
import { Payload } from "../../../generated/prisma/internal/prismaNamespace";

// const registerUser = async (req: Request, res: Response) => {
//   try {
//     const payload = req.body;

//     const user = await userService.registerUserIntoDB(payload);

//     res.status(HttpStatus.CREATED).json({
//       success: true,
//       statusCode: HttpStatus.CREATED,
//       message: "user registered successfully!!!",
//       data: {
//         user,
//       },
//     });
//   } catch (error) {
//     console.log(error);

//     res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
//       success: false,
//       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
//       message: "Failed to register user",
//       error: (error as Error).message,
//     });
//   }
// };

const registerUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const user = await userService.registerUserIntoDB(payload);

    sendResponse(res, {
      success: true,
      statusCode: HttpStatus.CREATED,
      message: "User registered Successfully...!",
      data: { user },
    });

    // res.status(HttpStatus.CREATED).json({
    //   success: true,
    //   statusCode: HttpStatus.CREATED,
    //   message: "user registered successfully!!!",
    //   data: {
    //     user,
    //   },
    // });
  },
);

const getMyProfile = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const { accessToken } = req.cookies;
    // console.log(accessToken);

    // const verifiedToken = jwtUtils.verifyToken(
    //   accessToken,
    //   config.jwt_access_secret,
    // );
    // // console.log(verifiedToken);

    // if (typeof verifiedToken === "string") {
    //   throw new Error(verifiedToken);
    // }

    const profile = await userService.getMyProfileFromDB(
      req.user?.id as string,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "user profile fetch successfully...",
      data: { profile },
    });
  },
);

const updateMyProfile = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id as string;

    const Payload = req.body;

    const updatedProfile = await userService.updateMyProfileIntoDB(
      userId,
      Payload,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User Profile Updated successfully...",
      data: { updatedProfile },
    });
  },
);

export const userController = {
  registerUser,
  getMyProfile,
  updateMyProfile,
};
