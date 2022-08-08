function somar() {
    var number1 = window.document.querySelector('input#firstN')
    var number2 = window.document.querySelector('input#secondN')
    var result = window.document.querySelector('div#resultado')
    var input1 = Number(number1.value)
    var input2 = Number(number2.value)
    var soma = input1 + input2
    result.innerHTML = `A soma entra ${input1} e ${input2} é igual à ${soma}`
}

function limpar() {
    window.document.querySelector('div#resultado').innerHTML = 'Resultado'
}