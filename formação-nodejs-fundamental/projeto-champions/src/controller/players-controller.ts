import { Request, Response } from "express";
import { getPlayerService } from "../services/player-service";
import { ok } from "../utils/http-helper";

export const getPlayer = async (  request: Request, response: Response) => {
        const data = getPlayerService();

        const result = await ok(data);

        response.status(response.statusCode).json(result.body);
}