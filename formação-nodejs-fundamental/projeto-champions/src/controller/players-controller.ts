import { Request, Response } from "express";
import { getPlayerService } from "../services/player-service";

export const getPlayer = (  request: Request, response: Response) => {
        const data = getPlayerService();
        response.status(200).json(data)
}