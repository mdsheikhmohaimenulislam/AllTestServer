// import type { Response } from "express";

// const sendRespond = <T>(
//   res: Response,
//   status: number,
//   success: boolean,
//   message: string,
//   data?: T,
// ) => {
//   return res.status(status).json({
//     success: success,
//     message: message,
//     data: data,
//   });
// };

// export default sendRespond;



import type { Response } from "express";

type TRespond<T> = {
  status: number;
  success: boolean;
  message: string;
  data?: T;
  error?: unknown;
};

const sendRespond = <T>(res: Response, data: TRespond<T>) => {
  return res.status(data.status).json({
    success: data.success,
    message: data.message,
    data: data.data,
    error: data.error,
  });
};

export default sendRespond;



