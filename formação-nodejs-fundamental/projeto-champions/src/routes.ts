import { Router } from "express";
import * as playerController from "./controller/players-controller";

const routes = Router();

routes.get("/players", playerController.getPlayer)
routes.get("/players/:id", playerController.getPlayerById)
routes.post("/players", playerController.postPlayer)

export default routes