let number = 1

console.log(number + 1) // operação binaria
console.log(++number) // operação unaria
console.log(true ? 'alo' : 'nada') // operação  ternaria

let name = new String('Kaio') //Declarando em uma variavel um novo objeto string
name.surName = 'Bruno'// Adicionando o dado surname (sobrenome) à essa variavel
let age = new Number(18) //declarando em uma variavel um novo objetoo number
console.log(name.surName, age)

let date = new Date('2022-12-01')//declarando em uma variavel um novo objeto date
console.log(date.__proto__) //verificando o prototype desse dado

console.log(typeof "Kaio") //verificando o tipo do dado declarado, no casa é um string

const person = {
    nameOne:"Kaio", //declarando um objeto com variavel person meu nome e idade
    age: 18
}
console.log(person) //verificando os dados printando no devtools
delete person.age //deletando um dado informado do objeto, nesse caso o dado deletado foi o age
console.log(person) //verificando se o dado foi deletado

// operações aritiméticas

//multiplicação
console.log(3*3)

//divisão
console.log(5/5)

//soma
console.log(5+5)

//subtação
console.log(5-5)

//resto da divisão
console.log(7%5)

//incremento
let increment = 0 //declarando uma variavel 0
increment++ // somando 1 ao seu valor/ incrementando 1 ao seu valor
console.log(++increment) // printando o valor e somando mais 1  ao valor já somado ou seja, 1+1
console.log(increment++) //printando o valor e somando mais 1 ao valor a cima 2+1, porem o valor só vai ser printando como 3 dps dessa linha de codigo, ou seja o console dessa linha ainda tem o valor de 2
console.log(increment) // printando o valor somado a cima como 3

//decramento
let decrement = 3 //declarando uma variavel 3
decrement-- //subtraindo 1 dessa variavel
console.log(decrement) //printando esse resultado de subtração acima como 2
console.log(--decrement) // printando e subtraindo o valor acima por mais 1 printando 1
console.log(decrement--) // printando e subtraindo o valor a acima printando 1, já que com o decremento depois da variavel o resultado so vai ser printando no proximo console
console.log(decrement) //verificando a  subtração do valor acima

//exponencial
console.log(3 ** 3) //aqui  podemos fazer o termo matematico 3³=27

let total = 2 + 3 * 5 // na matematica temos ordens de operações que não é ignorada pelo js
console.log(total)
let totalOne = (2 + 3) * 5 //nessa operação foi inciada com a soma nos () e depois para a multiplicação assim como na vida real
console.log(totalOne)

//Operadores de comparação
//Igual
let one = 1
let two = 2
console.log(one == 1)

//Diferente
console.log(two != one)

//Operadores de comparação restritos
// a diferença entre as operações de comparação normal e as restritas são que as restritas vão verificar se o valor e o tipo do dado são verdadeiros já a comum se apenas o valor for igual o resultado vai ser true.
//Igual
console.log(one === one)

//Diferente
console.log(two !== one)

//Maior ou menor que

//Maior
console.log(two > one) //maior que
console.log(two >= two) //maior ou igual

//Menor
console.log(one < two) //menor que
console.log(one <= one) //menor ou igual 

//Operadores de atribuição

let x

//assignment
x = 5
console.log(`o valor de x é igual a ${x}`)

//addition assignment
x += 2 //soma
console.log(`Depois da soma o valor de x agora é ${x}`)
x -= 1 // subtração
console.log(`Agora que eu subtrai 1 de x ele vale ${x}`) 
x *= 2
console.log(`Agora multiplicando por 2 x é igual à ${x}`)
x /= 2
console.log(`Dividindo por 2, x é igual à ${x}`)
x %=  4
console.log(`Dividindo x por 4 a sobra é igual à ${x}`)
x **= 3
console.log(`Elevando x por 3 o resultado é igual à ${x}`)

//Operadores logicos

let  bread = true
let chesse = false

console.log(bread && chesse) // AND: Meu codigo só vai dar true se o bread e o chesse estiverem true
console.log(bread || chesse) // OR: Meu codigo vai dá true se algum dos dois for true se os dois forem false, meu codigo vai se false
console.log(!bread) //NOT: negação ou seja se um dado por true com o operador not ele vai negar esse true que vai passar para false

//Operadores condicionais

// AND
let pão = true
let queijo = false

const niceBreakfast = pão && queijo ? 'Café top' : 'Café ruim' // pãp e queijo true ? café bom se não café ruim
console.log(niceBreakfast)

// OR
let pãoOr = true
let queijoOr = false

const niceBreakfastOne = pãoOr || queijoOr ? 'Café top' : 'Café ruim' // pão ou queijo true?(algum dos dois true) café top se não (os dois false) café ruim
console.log(niceBreakfastOne)

// Maior de 18
let nameOne = "Kaio"
let ageOne = 18
const canDrive = ageOne >=18 ? "Can drive" : "can't drive" //age >=18 (condition) ? (se a condition for verdadeira) "can drive" (valor um) : (se não) "can't drive" (valor 2)

console.log(`You ${nameOne} ${canDrive} `)
let alpha = 'alpha'
console.log(alpha + 'bet') // operação de concatenação.


//Em alguns casos um valor boleano é obrigatorio, logo se em uma condicional esses dados vão ser trasformados em um boleano false.
//Todos o dados apresentados na condicional vai ser trasnformada em false já que em um condicional ou loop, valores boleanos são obrigatorios

console.log(false  ? 'Verdadeiro' : 'Falso')
console.log(0  ? 'Verdadeiro' : 'Falso')
console.log(-0  ? 'Verdadeiro' : 'Falso')
console.log(""  ? 'Verdadeiro' : 'Falso')
console.log(null  ? 'Verdadeiro' : 'Falso')
console.log(undefined  ? 'Verdadeiro' : 'Falso')
console.log(NaN  ? 'Verdadeiro' : 'Falso')

//O mesmo acontece com o true, e nesse caso os dados que vão ser trocados por true em uma condicional ou loop são esses.

console.log(true  ? 'Verdadeiro' : 'Falso')
console.log({}  ? 'Verdadeiro' : 'Falso')
console.log([]  ? 'Verdadeiro' : 'Falso')
console.log(1  ? 'Verdadeiro' : 'Falso')
console.log(3.23  ? 'Verdadeiro' : 'Falso')
console.log("false"  ? 'Verdadeiro' : 'Falso')
console.log(-1  ? 'Verdadeiro' : 'Falso')
console.log(Infinity  ? 'Verdadeiro' : 'Falso')

//Operator precedence
/*
Assim como na matemática os operadores também tem suas sequencias que devem ser seguidas essa é a sequencia:
* grouping                      ()
* negação e incremento        ! ++ -- 
* multiplicação e divisão      * /
* adição e subtração           + -
* relacional               < <= > >=C
* igualdade               == != === !==
* AND                           &&
* OR                            ||
* condicional                   ?:
* assignment (atribuição)  = += -= **
*/

console.log((2 + 5) * 10  )
console.log(3 > 2 > 1) //nesse caso precedencia é definição boleano já que por baixo dos banos 1 = true e 0 = false, o resultado desse codigo é igual a false por que o 3 > 2 = true > 1 = false já que true é = 1 vamos fazer o certo a baixo.
console.log(3 > 2 >= 1) // já nesse o resultado é true por que true >= 1 é IGUAL.
console.log(3 > 2 && 2 > 1) // nesse caso seria o que eu estava esperando no primeiro codigo.