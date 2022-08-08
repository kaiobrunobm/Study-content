let string = "123"//declarando uma string chamada 123 na variavel
console.log(Number(string))//trocando esse dado string por number

let number = 123 //declarando um dado number em uma variavel
console.log(String(number))//trocando esse dado de number para string

let word = "Paralelepipedo"
console.log(word.length) //na linha 5 à 8 é demonstrado alguns comandos que não funcionam em dados string ou number que passam a funcionar já seus dados foram mudados

let numberOne = 1234
console.log(String(numberOne).length)

let numberTwo = 241.2121231233 //declarando um numero longo com pontuação
console.log(numberTwo.toFixed(2).replace(".",",")) //Deixando esse numero mais curto mostrando apenas 2 digitos depois do ponto, e trocando esse ponto por uma virgula)

let wordThree = "Programar é muito foda" //Declarando uum dado string ou seja uma frase comum
console.log(wordThree.toUpperCase()) // Tranformando essa string em todas letras maiusculas.
console.log(wordThree.toLowerCase()) //Deixando todos os caracteres dessa string minusculas..

let  phrase = "Eu quero ser profissional em frontend" //Declarando uma frase string
let myArray = phrase.split(" ") //Informando para separar a frase à cada espaço
console.log(myArray) //Printando  a frase separada pelos espaços na Devtools

let phraseWithUderscore = myArray.join("_") //Trocando a separação  pelos espaços por um (_)
console.log(phraseWithUderscore.toUpperCase()) //Printando no devtools a frase com os _ e deixando toda a frase com os caracteres maiusculos

let phraseOne = "Eu quero viver meu sonho!" //declarando uma frase qualquer
console.log(phraseOne.includes("sonho")) //Verificando se a frase declarada tem a palavra sonho, se sim (true) se não (false)

let myArrayOne = new Array ('A', 'B', 'C')//Não entendido
console.log(myArrayOne) //Não entendido
console.log(myArrayOne.length) // contando as caracteres do Array

console.log([

    'a','b','c'//declarando um Array com 3 dados

].length)//.length, informando quando caracteres tem no Array

let wordFour = "Kaio Bruno Barbosa MAgalhães"//declarando um variavel com o meu nome
console.log(Array.from(wordFour))//Transformando cada caracteres da minha varival com meu nome em uma Array



//Manipular arrays

let dev = ["html", "css", "js"]
console.log(dev.push("nodejs"))//Adicionando dados ao final de uma Array
console.log(dev)

dev.unshift("sql")//Adicionando dados ao inicio da array
console.log(dev)

dev.pop()//retirando dados do final de uma array
console.log(dev)

dev.shift()//retirando dados do inicio de uma array
console.log(dev)

console.log(dev.slice(0,2))//recortando apenas 2 dados do array para aparecer

dev.splice(1,1)//retirar um ou mais dados especificos do array escolhendo sua posição
console.log(dev)

let index = dev.indexOf("html") //Informar a posição de alguma dado no array
console.log(index)