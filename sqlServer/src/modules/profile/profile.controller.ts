import type { Request, Response } from "express";
import sendRespond from "../../utility/sendResponse";
import { profileService } from "./profile.service";

const createProfile = async (req: Request, res: Response) => {
  try {
    const result = await profileService.createProfileIntoDB(req.body);
    // console.log(result);
    // console.log(result.rows[0]);

    return sendRespond(
      res,
      201,
      true,
      "Profile Created Successfully!..",
      result.rows[0],
    );
  } catch (error: any) {
    sendRespond(res, 500, false, error.message, error);
  }
};

export const profileController = {
  createProfile,
};
