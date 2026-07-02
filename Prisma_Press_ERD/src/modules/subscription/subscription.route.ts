import { Router } from "express";
import { subscriptionController } from "./subscription.controller";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middleWares/auth";

const router = Router();

router.post(
  "/checkOut",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  subscriptionController.createCheckoutSession,
);

export const subscriptionRouters = router;
