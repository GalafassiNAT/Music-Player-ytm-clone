import { Router } from "express";
import { userRoutes } from "./usage/user.routes.ts";
import { artistRoutes } from "./usage/artist.routes.ts";


const testRoute = Router();


testRoute.use("/user", userRoutes);
testRoute.use("/artist", artistRoutes);

export { testRoute };