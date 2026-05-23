import type { Request, Response } from "express";
import sendRespond from "../../utility/sendResponse";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  //   console.log(req.body);
  try {
    const result = await userService.createUserIntoDB(req.body);
    sendRespond(res, {
      status: 200,
      success: true,
      message: "User created",
      data: result.rows[0],
    });
  } catch (error: unknown) {}
};

const getAllUsers = async (req: Request, res: Response) => {
  console.log(req.user);
  try {
    const result = await userService.getAllUsersIntoDB();

    sendRespond(res, {
      status: 200,
      success: true,
      message: "Successfully All User Data..",
      data: result,
    });
  } catch (error: any) {
    sendRespond(res, {
      status: 500,
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.getSingleUserIntoDB(id as string);
    // console.log(result.rows);

    if (result.rows.length === 0) {
      return sendRespond(res, {
        status: 404,
        success: false,
        message: "User Not Found!..",
      });
    }
    return sendRespond(res, {
      status: 200,
      success: true,
      message: "User retrived Successfully..",
      data: result.rows,
    });
  } catch (error: any) {
    return sendRespond(res, {
      status: 500,
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const updatedUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  //   const { name, password, age, is_active } = ;
  // console.log({name,password,age,is_active})

  try {
    const result = await userService.updatedUserIntoDB(req.body, id as string);
    // console.log(req.body);
    if (result.rows.length === 0) {
      return sendRespond(res, {
        status: 404,
        success: false,
        message: "User Not Found!..",
      });
    }

    sendRespond(res, {
      status: 200,
      success: true,
      message: "User updated Successfully..",
      data: result.rows[0],
    });
  } catch (error: any) {
    sendRespond(res, {
      status: 404,
      success: false,
      message: "User Not Found!..",
    });
  }
};

const userDeleted = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userService.userDeletedIntoDB(id as string);

    if (result.rowCount === 0) {
      return sendRespond(res, {
        status: 404,
        success: false,
        message: "User Not Found!..",
      });
    }

    sendRespond(res, {
      status: 200,
      success: true,
      message: "User Deleted Successfully..",
    });
    // console.log(result);
  } catch (error: any) {
    sendRespond(res, {
      status: 500,
      success: false,
      message: "User Not Found!..",
    });
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updatedUser,
  userDeleted,
};
