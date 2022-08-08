function convertTemperature (temperature) { //Função de converter temperatura
    const itsCelsius = temperature.toUpperCase().includes('C') //variavel com a candição da temperatura celsius = incluir a letra C
    const itsFahrenheit = temperature.toUpperCase().includes('F') //variavel com a candição da temperatura fahrenheit = incluir a letra T

if (!itsCelsius && !itsFahrenheit) { // if incluindo as condições acima = se diferente (!) itscelsius and (&&) itsfahrenheit t
    throw new Error('Grau não identificado') //jogar error = Grau não identificado
    }
    let updatedTemperature = temperature.toUpperCase().replace("F" , ""); // //variavel de armazenação de temperatura convertida e trocando seu simbolo de temperatura
    let formula = fahrenheit => (fahrenheit - 32) * 5/9 // variavel com formula de converção de fahrenheit para celsius
    let temperatureSign = 'C' // simbolo de temperatura = C


    if (itsCelsius) {
        updatedTemperature = temperature.toUpperCase().toFixed(2).replace("C" , ""); // //variavel de armazenação de temperatura convertida e trocando seu simbolo de temperatura
        formula = celsius =>  celsius * 9/5 + 32 // variavel com formula de converção de celsius para fahrenheit
        temperatureSign = 'F' // simbolo de temperatura = F
    }

    return formula(updatedTemperature) + temperatureSign // retorno da temperatura convertida e concatenando o simbolo de temperatura
}
try {
console.log(convertTemperature('50C'))
console.log(convertTemperature('122F'))
console.log(convertTemperature('5h'))
} catch (error) { // catch (pegar) error jogado acima
    console.log(error.message) //printar error se "pegado"
}

// Não consegui fazer sozinho.