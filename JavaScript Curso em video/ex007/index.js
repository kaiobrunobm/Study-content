var areaAdd = window.document.getElementById('area')
areaAdd.addEventListener('click', clicar)
areaAdd.addEventListener('mouseenter', entrar)
areaAdd.addEventListener('mouseout', sair)

function clicar(){
var area = window.document.getElementById('area')
area.innerText = 'Clicou!'
area.style.background = 'red'
}
function entrar(){
    var area = window.document.getElementById('area')
    area.innerText = 'Entrou!'
    area.style.background = 'yellow'
}
function sair(){
    var area = window.document.getElementById('area')
    area.innerText = 'Saiu!'
    area.style.background = 'green'
}