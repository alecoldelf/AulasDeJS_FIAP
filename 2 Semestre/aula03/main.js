import encript from "./crypto.js";
import readlineSync from "readline-sync"
import chalk from "chalk"

console.log("oi gente")

let text = encript("oi gente")
console.log(text);

let nome = readlineSync.question("Digite seu nome: ");
console.log("Oi" + nome + "!");

console.log(chalk.red("Hello World!"));