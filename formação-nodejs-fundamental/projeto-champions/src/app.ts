import express, {Request, Response } from "express";

import router from "./routes";

import cors from "cors";



function app() {
    
    const app = express();

    app.use(express.json());
    app.use("/api", router);

    const corsOptions = {
        origin : 'http://lucas.com',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }
    app.use(cors())

    

    return app;
        
}


export default app;