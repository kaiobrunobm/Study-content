function verificar() {
let inicio = document.getElementById("inicio");
let fim = document.getElementById("fim")
let passo = document.getElementById("passo")
let resultado = document.querySelector("section.resultado")

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert("[ERROR] Adicione os dados!")
} else {
    resultado.innerHTML = "Contando..."
    let inicioNumber = Number(inicio.value)
    let fimNumber = Number(fim.value)
    let passoNumber = Number(passo.value)

    if (inicioNumber < fimNumber) {
        
            for(let contador = inicioNumber; contador <= fimNumber; contador += passoNumber) {
                resultado.innerHTML += `${contador} | `
            }
        } else {
            for (let contador = inicioNumber; contador >= fimNumber; contador -= passoNumber) {
                resultado.innerHTML += `${contador} | `
            }
            }
                resultado.innerHTML += `${contador} | `
    }
}
