import {IncomingMessage, request, ServerResponse} from "http";



export const getListEpisodes =  async (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    response.end(
        JSON.stringify([
            {
            podcastName: "flow",
            episode: "CBUM - Flow #319",
            videoId: "pQSuQmUfS30",
            categories: ["saúde", "esporte", "bodybuilder"]
            },
            {
            podcastName: "flow",
            episode: "RUBENS BARRICHELLO - Flow #339",
            videoId: "4KDGTdiOV4I",
            categories: ["esporte", "corrida"]
            }
        ])
);

    

}