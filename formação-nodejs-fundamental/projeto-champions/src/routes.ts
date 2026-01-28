import { Router } from "express";
import { getPlayer } from "./controller/players-controller";

const routes = Router();

routes.get("/", getPlayer)

export default routes