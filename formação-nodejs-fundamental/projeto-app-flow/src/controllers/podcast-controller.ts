import {IncomingMessage, request, ServerResponse} from "http";

import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { servieListEpisodes } from "../services/list-episodes-service";




export const getListEpisodes =  async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const content = await servieListEpisodes();

    response.writeHead(200, {
        'Content-Type': 'application/json'});

    response.end(JSON.stringify(content));



}

export const getFilterEpisodes = async (
    request: IncomingMessage, 
    response: ServerResponse
) => {

    const querryString = request.url?.split("?")[1] ?? "";
    const content = await serviceFilterEpisodes("flow");

    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    response.end(JSON.stringify(content));
}