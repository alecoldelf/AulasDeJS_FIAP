function primo(n) {
    let n = parseInt(document.getElementById("numeroPrimo").value);
    
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

function primosEntre(x, y) {
    let cont = 0;

    for (let i = x; i <= y; i++) {
        if (primo(i)) {
            count++;
        }
    }

    console.log(`Existem ${count} números primos entre ${x} e ${y}`);
}

function contarMoedas(m) {
    const moedas = [100, 50, 10, 5, 1];
    let resultado = {};

    moedas.forEach((moeda) => {
        let qtd = Math.floor(valor/moeda);
        resultado[moeda] = qtd;
        valor %= moeda;
    });

    moedas.forEach((moeda) => {
        console.log(`${resultado[moeda]} moeda(s) de M$ ${moeda}`);
    });
}

function fibonacci(f) {
    let fib = [1, 1];

    if (n === 1) {
        console.log(1);
    }
    else if (n === 2) {
        console.log(1 + ', ' + 1);
    }
    
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    console.log(fib.join(', '));
}