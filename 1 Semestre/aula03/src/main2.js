function calcular() {
    console.log("estou executando calcular");
    let num1 = document.getElementById("campo1");
    let num2 = document.getElementById("campo2");

    let nota1 = parseInt(num1.value);
    let nota2 = parseInt(num2.value);

    let media = (nota1 + nota2) / 2
    
    console.log(`Sua média é ${media}`)
}