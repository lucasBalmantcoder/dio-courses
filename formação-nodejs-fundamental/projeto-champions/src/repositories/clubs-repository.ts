import { clubModel } from "../models/clubs-model";
import fs from "fs/promises";


const database: clubModel[] =[
        {
            id : 1,
            name : "Manchester United"
        },

    ]
export const findAllClubs = async (): Promise<clubModel[]> => {
    const data = await fs.readFile(__dirname + '/clubs.json', 'utf-8');
    const clubs: clubModel[] = JSON.parse(data);

    return clubs;


};