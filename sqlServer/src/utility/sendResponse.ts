import type { Response } from "express";

const sendRespond = <T>(
  res: Response,
  status: number,
  success: boolean,
  message: string,
  data?: T,
) => {
  return res.status(status).json({
    success: success,
    message: message,
    data: data,
  });
};

export default sendRespond;
