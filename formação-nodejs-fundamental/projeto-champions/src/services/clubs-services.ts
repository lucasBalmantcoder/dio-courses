import * as HtppResponse from "../utils/http-helper";
import * as clubsRepository from "../repositories/clubs-repository";



export const getClubsService = async () => {
    const data = await clubsRepository.findAllClubs
    const _response = HtppResponse.ok(data);

    return _response

    
};

