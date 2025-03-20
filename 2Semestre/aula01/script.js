console.log("oi gente!");

localStorage.setItem("username", "João Alface");
let nome = localStorage.getItem("username");
console.log("nome", nome);

localStorage.setItem("userage", 23);
let age = localStorage.getItem("userage");
console.log("age", age);

let user = {
    "name": "João Alface",
    "age": 23,
    "email": "joao@joao.com",
    "login": "joao"
}

console.log("user", user);

//let userTxt = `{
//"name": "João Alface",
//"age": 23,
//    "email": "joao@joao.com",
//    "login": "joao" 
//}`

console.log("userTxt", userTxt);

//let user = JSON.parse(userTxt); (.parse transforma em objeto)
let userTxt = JSON.stringify(user); //(.stringify transforma em texto) 
console.log("user", user);

console.log(user.name);
console.log(userTxt.name);