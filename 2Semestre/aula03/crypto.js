export default function encript(texto) {
    let saida = ""
    for (let i = 0; i < texto.length; i++) {
        let c = texto.charAt(i)
        saida = saida + c + "x"
    }
    return saida
}