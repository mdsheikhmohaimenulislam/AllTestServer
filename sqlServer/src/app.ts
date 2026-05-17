import express, {
  type Application,
  type Request,
  type Response,
} from "express";
const app: Application = express();

import sendRespond from "./utility/sendResponse";
import { pool } from "./db";
import { userRoute } from "./modules/user/user.route";
import { profileRoute } from "./modules/profile/profile.routes";
import { authRoute } from "./modules/auth/auth.routes";

app.use(express.json());
// app.use(express.text())
// app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  // res.status(200).json({ message: "Express Server.." });
  sendRespond(res, 200, true, "User Created Successfully.");
});

// connect in router....
app.use("/api/users", userRoute);
app.use("/api/profile", profileRoute);
app.use("/api/auth", authRoute);

export default app;
