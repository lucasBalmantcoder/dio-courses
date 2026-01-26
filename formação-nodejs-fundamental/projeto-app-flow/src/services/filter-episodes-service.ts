import { IncomingMessage } from "http";
import { repositoryPodcasts } from "../repositories/podcasts-repository"
import { PodCastTransferModel } from "../model/podCast-Transfer-Model";
import { StatusCode } from "../utils/status-code";


export const    serviceFilterEpisodes = async (podcastName: string | undefined) : Promise<PodCastTransferModel> => {

    // define a interface do retorno
    let responseFormat: PodCastTransferModel = {
        statusCode: 0,
        body: [] 
    }

    // buscando dados
    const querryString = podcastName?.split("?")[1] ?? "";

    const data = await repositoryPodcasts(querryString);

    // verifico se tem conteudo
    if ( data.length !== 0 ) {
        responseFormat.statusCode = StatusCode.OK;
        
    } else {
        responseFormat.statusCode = StatusCode.NOT_FOUND;
    }
    responseFormat.body = data
    
    return responseFormat
}