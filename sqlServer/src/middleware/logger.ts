import type { NextFunction, Request, Response } from "express";
import fs from "fs";

const logger = (req: Request, res: Response, next: NextFunction) => {
  // Middleware code goes here

  console.log(req.method);
  console.log(req.url);
  console.log("Time:", Date.now());
  const log = `
Method : ${req.method}
URL    : ${req.url}
Time   : ${new Date().toLocaleString()}
-------------------------
`;
  fs.appendFile("logger.txt", log, (err) => {
    // console.log(err);
  });
  // Call next() to pass control to the next middleware function
  next();
};

export default logger;
