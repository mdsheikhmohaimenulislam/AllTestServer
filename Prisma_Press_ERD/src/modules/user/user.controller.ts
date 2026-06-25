import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status";
import { userService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

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
  async (req: Request, res: Response, next: NextFunction) => {},
);

export const userController = {
  registerUser,
  getMyProfile,
};
