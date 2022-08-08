function tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('select')
    
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let numeroNumber = Number(numero.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${numeroNumber} x ${contador} = ${numeroNumber*contador}`
            item.value = `tabuada ${contador}`
            tabuada.appendChild(item)
            contador++
        }
        
    }
}