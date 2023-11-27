import { Router } from "express";
import { UserController } from "../../app/controllers/UserController.ts";

const userRoutes = Router();

const controller = new UserController();

userRoutes.post("/", controller.create);


export { userRoutes };