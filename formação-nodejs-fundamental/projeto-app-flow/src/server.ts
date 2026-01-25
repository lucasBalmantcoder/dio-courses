import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcast-controller";



const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {


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

