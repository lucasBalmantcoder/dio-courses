import { conectToDataBase } from "./database/data.js";

async function main() {
    await conectToDataBase("pass","pass")
    // console.log(process.env.USERDATABASE);
    
}

main();