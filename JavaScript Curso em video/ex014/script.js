function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('nasc')
    var res = document.querySelector('section.resultado')
    
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('sex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked){
            genero = 'Homen'
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', 'homem-criança.png')
            }else if (idade <= 21) {
                img.setAttribute('src', 'homem-jovem.png')
            }else if (idade <= 50) {
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                img.setAttribute('src', 'homem-idoso.png')
            }

        } else if (formSex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', 'mulher-criança.png')
            }else if (idade <= 21) {
                img.setAttribute('src', 'mulher-jovem.png')
            }else if (idade <= 50) {
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}