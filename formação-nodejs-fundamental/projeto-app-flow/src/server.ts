import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcast-controller";
import { log } from "console";



const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        //queryString
        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
        
        console.log(baseUrl);
        console.log(queryString);
        

        

        // listar podcast
        if (request.method === 'GET' && request.url === '/api/list') {
            await getListEpisodes(request, response);
        }
        if (request.method === 'GET' && request.url === '/api/episodes') {
            await getFilterEpisodes(request, response);
        }
    }
);

const port = process.env.PORT


server.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`));

