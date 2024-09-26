function trecho() {
    let e1 = document.getElementById("cxaIdade")
    let idade = parseInt(e1.value)
    console.log("Sua idade é: ",idade)
    
    let e2 = document.getElementById("resposta")
    //console.dir(e2)

    if(idade < 12) {
        e2.innerText = "Criança"
    }
    else if(idade < 18) {
        e2.innerText = "Adolescente"
    }
    else if(idade < 40) {
        e2.innerText = "Adulto"
    }
    else {
        e2.innerText    = "Velho"
    }
}