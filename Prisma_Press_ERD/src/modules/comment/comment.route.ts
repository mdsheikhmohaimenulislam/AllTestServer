import { Router } from "express";
import { auth } from "../../middleWares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router()

router.post("/", auth(Role.ADMIN,Role.AUTHOR,Role.USER),)
router.get("/author/:authorId",)
router.get("/:commentId",)
router.patch("/:commentId",)
router.delete("/:commentId",)
router.put("/:commentId/moderate")



export const commentRouter = router