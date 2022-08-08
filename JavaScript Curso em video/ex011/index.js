var pais = window.document.querySelector('input#input-pais')
var resultado = window.document.querySelector('div.resultado')
function analisar() {
        if (pais.value == "Brasil"){
            resultado.innerText = `Você é Brasileiro`
        } else {
            resultado.innerText = `Você é Gringo`
        }
}