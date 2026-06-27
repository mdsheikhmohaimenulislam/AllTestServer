import { Router } from "express";
import { auth } from "../../middleWares/auth";
import { Role } from "../../../generated/prisma/enums";
import { postController } from "./post.controller";

const router = Router();

router.post(
  "/",
  auth(Role.USER, Role.ADMIN, Role.AUTHOR),
  postController.createPost,
);

router.get("/", postController.getAllPost);

router.get("/stats", auth(Role.ADMIN), postController.getPostStatus);
router.get(
  "/my-posts",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  postController.getMyPost,
);
router.get("/:postId", postController.getPostById);

router.patch(
  "/:postId",
  auth(Role.USER, Role.ADMIN, Role.AUTHOR),
  postController.updatePost,
);

router.delete(
  "/:postId",
  auth(Role.USER, Role.ADMIN, Role.AUTHOR),
  postController.deletePost,
);

export const postRouter = router;
