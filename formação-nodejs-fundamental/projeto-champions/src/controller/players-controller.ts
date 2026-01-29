import { Request, Response } from "express";
import * as service from "../services/player-service";
import { ok } from "../utils/http-helper";

export const getPlayer = async (  request: Request, response: Response) => {
        const data = service.getPlayerService();

        const result = await ok(data);

        response.status(response.statusCode).json(result.body);
}


export const getPlayerById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = parseInt(req.params.id, 10);

  const httpResponse = await service.getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (  request: Request, response: Response) => {
        const bodyValue = request.body;
        const httpResponse = await service.createPlayerService(bodyValue);

        if (httpResponse){
            response.status(response.statusCode).json(httpResponse.body);
        }else{
            // response.status(response.statusCode).json(response.body);
        }

}

export const deletePlayer = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const httpResponse = await service.deletePlayerService(id);

    response.status(httpResponse.statusCode).json(httpResponse.body);


}


