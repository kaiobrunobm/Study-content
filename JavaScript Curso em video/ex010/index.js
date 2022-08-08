var velocidade = window.document.querySelector('input#input-vel')
var resultado = window.document.querySelector('div.resultado')
function analise(){
var vel = Number(velocidade.value)
resultado.innerHTML = `Sua velocidade atual é de ${vel}Km/h`
resultado.innerHTML += `<p>Dirija sempre com cinto de segurança!`

if (vel > 60){
    resultado.innerHTML = `Você ultrapassou o limite de velocidade a rôdivia!`
}else{
    resultado.innerHTML = `Você está entre o limite de velocidade, parabêns!`
}
}