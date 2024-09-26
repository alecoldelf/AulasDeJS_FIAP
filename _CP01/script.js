function calcular() {
    // Obtendo os valores de entrada
    const horaIni = parseInt(document.getElementById('horaIni').value);
    const minIni = parseInt(document.getElementById('minIni').value);
    const horaFim = parseInt(document.getElementById('horaFim').value);
    const minFim = parseInt(document.getElementById('minFim').value);

    // Convertendo tudo para minutos
    const inicioEmMinutos = horaIni * 60 + minIni;
    const fimEmMinutos = horaFim * 60 + minFim;

    // Calculando a duração
    let duracaoEmMinutos;
    if (fimEmMinutos >= inicioEmMinutos) {
        duracaoEmMinutos = fimEmMinutos - inicioEmMinutos;
    } else {
        // Se a reunião passar da meia-noite
        duracaoEmMinutos = (24 * 60 - inicioEmMinutos) + fimEmMinutos;
    }

    // Convertendo de volta para horas e minutos
    const horas = Math.floor(duracaoEmMinutos / 60);
    const minutos = duracaoEmMinutos % 60;

    // Exibindo o resultado
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
}
