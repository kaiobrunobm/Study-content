// FUNCTION

// function statement
/*
function createPhrases () {
    console.log('Eu vou ser o milhor em programação')
    console.log('Estou me esforçando muito e vou continuar assim')
    console.log('Eu consigo chegar lá')
}
// run function
createPhrases()
*/
// Function expression/anonymus

//parameters
const sum = function(number1, number2){
console.log(number1 * number2)
}

// run
sum (10, 10)//arguments

const plus = function(number0, number00){
    let total = (number0 + number00) // Nunca adicionar uma variavel sem as palavras chaves let,var,const caso contrario pode dar algum erro de scope
    return total
}
let number0 = 15
let number00 = 15

console.log(`o numero 1 é ${number0}`)
console.log(`o numero 2 é ${number00}`)
console.log(`a soma entre ele é ${plus(number0, number00)}`)

// FUNCTION SCOPE

let subject

function createThink (){
    subject = "Quero ser fera em programação"
    return subject
}
console.log(subject)
console.log(createThink())
console.log(subject)

/*
sayMyname ()

function sayMyname () {
    console.log('Kaio')
}
*/
// ARROW FUNCTION
/*
const sayMyname = (name) => { //funções podem ser feitas com arrows => trocando a crita 
    console.log(name)
}
sayMyname('Kaio')
*/

// CALLBACK FUNCTION

function sayMyname (name) {
name() 
}
sayMyname (
    () => {
        console.log('Estou em uma callback')
    }
)

function person(name) {
    this.name = name
    this.walk = ()=> { 
        return this.name +" está andando"
    }
}
const kaio = new person("Kaio")
const bruno = new person("Bruno")

console.log(kaio.walk())
console.log(bruno.walk())