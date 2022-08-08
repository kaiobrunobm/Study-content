let number = document.querySelector('input#form-number')
let list = document.querySelector('select#form-list')
let result = document.querySelector('section.result')
let values = []

function itIsNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (itIsNumber(number.value) && ! inList(number.value, values)){
        values.push(Number(number.value))
        let item = document.createElement('option')
        item.text = `Valor ${number.value} adicionado.`
        list.appendChild(item)
        result.innerHTML = ''
        result.innerHTML += `Números ${values} adicionados.`
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    number.value = ''
    number.focus()
}

function analisar() {
    if (values.length == 0) {
        window.alert('Adicione algum número.')
    } else {
        let total = values.length
        let greaterThan = values [0]
        let lowerThan = values [0]
        let sum = 0
        let average = 0

        for (let position in values) {
            sum += values[position]
            if (values[position] > greaterThan)
                greaterThan = values[position]
            if (values[position] < lowerThan)
            lowerThan = values[position]
            
        }
        average = sum / total
        result.innerHTML = ''
        result.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p>`
        result.innerHTML += `<p> O maior valor cadastrado foi ${greaterThan}</p>`
        result.innerHTML += `<p> O menor valor cadastrado foi ${lowerThan}</p>`
        result.innerHTML += `<p> Somando todos os números cadastrados temos o valor de ${sum}</p>`
        result.innerHTML += `<p> A média de todos os valores é ${average}</p>`
    }
}