import { Router } from "express";
import { auth } from "../../middleWares/auth";
import { Role } from "../../../generated/prisma/enums";
import { postController } from "./post.controller";

const router = Router();

router.get(
  "/",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  postController.createPost,
);
router.post("/", postController.getAllPost);

router.get("/stats", auth(Role.ADMIN), postController.getPostStatus);
router.get(
  "/my-posts",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  postController.getMyPost,
);
router.get("/:postId", postController.getPostById);
router.patch("/:postId", postController.updatePost);
router.delete("/:postId", postController.deletePost);

export const postRouter = router;
