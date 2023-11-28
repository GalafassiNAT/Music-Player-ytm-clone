import { Router } from "express";
import { ArtistController } from "../../app/controllers/ArtistController.ts";

const artistRoutes = Router();

const controller = new ArtistController();

artistRoutes.post("/", controller.create);

export { artistRoutes };