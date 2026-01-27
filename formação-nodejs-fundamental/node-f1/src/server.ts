import fastify from "fastify";
import { parse } from "path";
import cors from "@fastify/cors";


const server = fastify({
    logger: true

});


server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
    
})

const teams = [
    {id: 1, name: "ferrari", base : "maranello"},
    {id: 2, name: "redbull", base : "monaco"},
    {id: 3, name: "mercedes", base : "berlin"}
];


const drivers = [
    {id: 1, name: "lewis", team: "ferrari"},
    {id: 2, name: "max", team: "redbull"},
    {id: 3, name: "george", team: "mercedes"}
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);

    return teams;
});

server.get("/drives", async (request, response) => {
    response.type("application/json").code(200);
    return[drivers];    
})


interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drives/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((driver) => driver.id === id);
    if (!driver) {
        response.type("application/json").code(404);
        return {error: "Driver not found"};
    }else{
        response.type("application/json").code(200);
        return[drivers];    
    }
})


server.listen({port:3333}, () => {
    console.log("server init");
});

