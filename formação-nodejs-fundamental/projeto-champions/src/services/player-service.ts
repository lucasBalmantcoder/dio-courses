import * as playerRepository from "../repositories/player-repository";
import {ok} from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;


    if (data) {
        response = await ok(data);
    }else {
        response = await ok({});
    }

    return response;
}