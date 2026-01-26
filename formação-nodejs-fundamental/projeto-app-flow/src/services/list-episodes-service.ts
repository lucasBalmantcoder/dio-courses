
import { PodCastTransferModel } from "../model/podCast-Transfer-Model";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const servieListEpisodes = async (): Promise<PodCastTransferModel> => {
     // define a interface do retorno
    let responseFormat: PodCastTransferModel = {
        statusCode: 0,
        body: [] 
    }

    const data = await repositoryPodcasts();


    
    if ( data.length !== 0 ) {
        responseFormat.statusCode = StatusCode.OK;
        
    }

    return responseFormat
}