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

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsersIntoDB();

    sendRespond(res, 200, true, "Users retrived Successfully..", result.rows);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await userService.getSingleUserIntoDB(id as string);
    // console.log(result.rows);

    if (result.rows.length === 0) {
      return sendRespond(res, 404, false, "User Not Found!..", {});
    }
    sendRespond(res, 200, true, "User retrived Successfully..", result.rows);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
};

const updatedUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  //   const { name, password, age, is_active } = ;
  // console.log({name,password,age,is_active})

  try {
    const result = await userService.updatedUserIntoDB(req.body, id as string);

    if (result.rows.length === 0) {
      return sendRespond(res, 404, false, "User Not Found!..", {});
    }

    sendRespond(res, 200, true, "User updated Successfully..", result.rows[0]);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
};

const userDeleted = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userService.userDeletedIntoDB(id as string);

    if (result.rowCount === 0) {
      return sendRespond(res, 404, false, "User Not Found!..", {});
    }

    sendRespond(res, 200, true, "User Deleted Successfully..", {});
    // console.log(result);
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updatedUser,
  userDeleted,
};
