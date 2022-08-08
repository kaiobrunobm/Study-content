function carregar() {
    var msg = window.document.querySelector('section.msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'Manhã.png'
        document.body.style.background = '#ff9049'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'Tarde.png'
        document.body.style.background = '#fef676'
        // #
    } else {
        img.src = 'Noite.png'
        document.body.style.background = '#192c30'
    }
}