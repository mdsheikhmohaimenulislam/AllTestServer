import type { Request, Response } from "express";
import sendRespond from "../../utility/sendResponse";
import { profileService } from "./profile.service";

const createProfile = async (req: Request, res: Response) => {
  try {
    const result = await profileService.createProfileIntoDB(req.body);
    // console.log(result);
    // console.log(result.rows[0]);

    return sendRespond(res, {
      status: 201,
      success: true,
      message: "Profile Created Successfully!..",
      data: result.rows[0],
    });
  } catch (error: any) {
    sendRespond(res, {
      status: 500,
      success: false,
      message: "User Not Found!..",
    });
  }
};

export const profileController = {
  createProfile,
};
