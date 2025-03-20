import nomes from "./nomes.js";
import sobrenomes from "./sobrenomes.js";
import email from "./email.js";

export function rgFake() {
    return Math.random().toString().slice(3, 12);
}

export function nameFake() {
    let idx = parseInt(Math.random()*nomes.length)
    return nomes[idx]
}

export function sobrenomeFake() {
    let idx = parseInt(Math.random()*sobrenomes.length)
    return sobrenomes[idx]
}

export function emailFake (nome, sobrenome) {
    let idx = parseInt(Math.random()*email.length)
    let dominio = email[idx]
    return nome.toLowerCase()+"."+sobrenome.toLowerCase()+"@"+dominio
}