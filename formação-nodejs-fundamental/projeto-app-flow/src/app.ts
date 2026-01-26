import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcast-controller";
import { log } from "console";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";




export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

        //queryString
        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
        
        console.log(baseUrl);
        console.log(queryString);
        



        // listar podcast
        if (request.method === HttpMethod.GET && request.url === Routes.LIST) {
            await getListEpisodes(request, response);
        }
        if (request.method === HttpMethod.GET && request.url === Routes.EPISODES) {
            await getFilterEpisodes(request, response);
        }
    }