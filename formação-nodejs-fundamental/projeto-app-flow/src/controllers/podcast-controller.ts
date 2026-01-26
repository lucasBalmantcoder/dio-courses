import {IncomingMessage, request, ServerResponse} from "http";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { servieListEpisodes as serviceListEpisodes } from "../services/list-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodCastTransferModel } from "../model/podCast-Transfer-Model";




export const getListEpisodes =  async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const content: PodCastTransferModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
    response.write(JSON.stringify(content.body));
    response.end();



}

export const getFilterEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    

    const content: PodCastTransferModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, {'Content-Type': ContentType.JSON });
    response.write(JSON.stringify(content.body));
    response.end();
}