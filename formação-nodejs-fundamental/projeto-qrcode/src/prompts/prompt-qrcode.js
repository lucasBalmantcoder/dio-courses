import chalk from "chalk";

const promptQrcode = [
    {
        name: "link",
        description: chalk.yellow("Digite o texto que deseja gerar o QR Code:"),
        required: true
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo de QR Code (1 - NORMAL | 2 - TERMINAL):"),
        pattern: /^[1-2]$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
];

export default promptQrcode;
