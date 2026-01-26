import {IncomingMessage, request, ServerResponse} from "http";

import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { servieListEpisodes } from "../services/list-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";




export const getListEpisodes =  async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const content = await servieListEpisodes();

    response.writeHead(StatusCode.OK, {
        'Content-Type': ContentType.JSON});

    response.end(JSON.stringify(content));



}

export const getFilterEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    

    const content = await serviceFilterEpisodes(request.url);

    response.writeHead(StatusCode.OK, {
        'Content-Type': ContentType.JSON
    });

    response.end(JSON.stringify(content));
}