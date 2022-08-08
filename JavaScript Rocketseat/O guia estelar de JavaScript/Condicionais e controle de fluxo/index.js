// if e else
/*

if (true) {
    
} else {   Modelo se if else

}
*/

//Esse codigo  if else vai verificar se alguem está com frebe

let temperature = 37 // declarando variavel com a temperatura verificada

/*
se ( temperatura declarada for maior ou igual 37) {
    aparecer na tela (Você está com febra não pode entrar nesse local.)
} se não {
    mostrar na tela (Você está saudavel, pode entrar.)
}
*/
if (temperature >= 37) {
    console.log ("Você está com febra não pode entrar nesse local.")
} else { //caso minha pagina não precise de uma resposta (se não) o else pode ser descartado
    console.log("Você está saudável, pode entrar.")
}   


let temperatura = 36
// Assim como eu posso descartar o else se não for necessario em minha pagina, eu posso adicionar quantos (else if) for necessario para minha pagina.
//else if serve para continuar condicionais até quanto for preciso.
if (temperatura >= 37.5) {
    console.log('Febre alta')
} else if (temperatura < 37.5 && temperatura >= 37) {
    console.log ('Febre baixa')
} else if (temperatura <= 35){
    console.log('Possivel hipotermia')
} else {
    console.log('saudável')
}

//outra formar de fazer else if

let temperatureOne = 38
highTemperature = temperatureOne >= 37.5 // Se o valor das condicionais baterem no if e for verdadeiro  todo o resto vai ser desconsiderado, ou seja se o calculo abaixo bater de frente com o codigo acima, não importa já que pelo if está concluido ela ignora o resto do codigo.
mediumTemperature = temperatureOne <= 37.5 && temperatureOne > 37
lowTemperature = temperatureOne <= 35

if (highTemperature){
    console.log('Febre alta') 
} else if (mediumTemperature){
    console.log ('Febre baixa')
} else if (lowTemperature) {
    console.log('Possivel hipotermia')
} else {
    console.log('Saudável')
}

//como falado antes, condicioanais são obrigatorio valor boleano se não for ou seja valores que  são false vão ignorar o if por exemplo:
// o mesmo ocorre do contrario
if (""){
console.log('Valor true')
} else { 
    console.log('valor false')
}  

//switch
/*
Modelo switch
switch (expression) {
    case 'a' : 
        //codigo
        break
    case 'b':
        //codigo da expression b
        break
    default:

        break
}
*/

let expression = 'a'

switch (expression) {
    case 'a' : 
        console.log('a')
        break //o break serve para que se o caso for concluido, o codigo  é break(quebrado)
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break
}


//Calculadora simples com switch
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não inserido')
            break
    }
    return result
}

console.log(calculate (5, '+', 5))

//throw && try catch

function sayMyName (name = '') { //function sayMyName
    if (name === '') { //se nome for igual a nada
        throw new Error ("Nome é necessario.") //throw/jogar novo erro mostrando na tela Nome necessario
    }
    console.log(`Ola ${name}`) //se não mostrar na tela ola + nome adicionado
}

// try catch

try { //tentar
    sayMyName ('Kaio') //sayMyName = nada, ou = name
} catch(nameFunction) { //catch/pegar, vai receber um parametro que no caso é nameError
    console.log(nameFunction)//vai printar na tela esse erro pagado que vai ser armazenado no parametro.
}
