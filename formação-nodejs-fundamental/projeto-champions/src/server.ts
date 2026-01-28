import express, { json, Request, Response} from 'express';
import createApp from "./app";
import routes from './routes';

const app = createApp();
const port = process.env.PORT;

app.use(json());
app.use("/", routes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

        
});
