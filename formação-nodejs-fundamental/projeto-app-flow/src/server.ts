import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcast-controller";
import { log } from "console";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";



const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

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
);

const port = process.env.PORT


server.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`));

