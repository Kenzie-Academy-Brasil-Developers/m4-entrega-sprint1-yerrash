import { Router } from "express";
import UserController from "../controllers/users.controller";
import authMiddleware from "../middlewares/auth.middleware";
import emailVerifierMiddleware from "../middlewares/emailVerifier.middleware";

const userRouter = Router();
const userController = new UserController();

userRouter.post("", emailVerifierMiddleware, userController.creator);
userRouter.get("", authMiddleware, userController.lister);
userRouter.get("/profile", authMiddleware, userController.profiler);
userRouter.patch("/:id", authMiddleware, userController.patcher);
userRouter.delete("/:id", authMiddleware, userController.delete);

export default userRouter;
