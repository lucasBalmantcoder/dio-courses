import prompt from "prompt";
import promptQrcode from "./prompts/prompt-qrcode.js";
import chalk from "chalk";
import mainPrompt from "./prompts/prompt-main.js";1
import createQrCode from "./services/qr-code/create.js";


async function main() {   
    prompt.get(mainPrompt, async (err, result) => {
        if (result.select ==1) await createQrCode();
        if (result.select ==2) await console.log("escolheu password");
    });
    prompt.start();
}

main();
