import { PlayerModel } from "../models/player-model";
import * as playerRepository from "../repositories/player-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;


    if (data) {
        response = await HttpResponse.ok(data);
    }else {
        response = await HttpResponse.noContent();
    }
    return response;

}

export const getPlayerByIdService = async (id: number) => {

    // pedir para o repositorio os dados
    const data = await playerRepository.findPlayerById(id);
    let response = null;

    if(data) {
        response = await HttpResponse.ok(data);
    }else {
        response = await HttpResponse.badRequest();
    }

    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  //verifica se está vazio
  if (Object.keys(player).length !== 0) {
    await playerRepository.insertPlayer(player);
    response = await HttpResponse.ok(player);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};