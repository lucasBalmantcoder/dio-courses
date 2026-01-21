import chalk from "chalk";
import logSymbols from 'log-symbols';

console.log(chalk.blue.bgYellow.italic("Ola seres Humanos"));

console.log(logSymbols.success, 'Finished successfully!');
// Terminals with Unicode support:     ✔ Finished successfully!
// Terminals without Unicode support:  √ Finished successfully!
