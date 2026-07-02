import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import config from "./config";
import cors from "cors";
import { userRouters } from "./modules/user/user.route";
import { authRoutes } from "./modules/auth/auth.route";
import { postRouter } from "./modules/post/post.route";
import { commentRouter } from "./modules/comment/comment.route";
import { notFound } from "./middleWares/notFound";
import { globalErrorHandling } from "./middleWares/globalErrorHandler";
import { subscriptionRouters } from "./modules/subscription/subscription.route";

const app: Application = express();

app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/users", userRouters);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);
app.use("/api/subscription", subscriptionRouters);




app.use(notFound);

app.use(globalErrorHandling);

export default app;
