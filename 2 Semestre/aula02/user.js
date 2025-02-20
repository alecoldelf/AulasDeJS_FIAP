import { rgFake, nameFake, sobrenomeFake, emailFake } from "./fakers.js";
export function createUser() {
    let firstname = nameFake()
    let lastname = sobrenomeFake()
    let obj = {
        firstname,
        lastname,
        rg: rgFake(),
        email: emailFake(firstname, lastname)
    }
    return obj;
}