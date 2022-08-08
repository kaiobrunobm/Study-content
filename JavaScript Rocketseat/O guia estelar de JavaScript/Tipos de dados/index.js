// STRING: é um texto no js
/*
Para adicionar uma string no codigo temos que adicinar esse string no meio de

"" = aspas duplas
'' = aspas simples
`` = template literals ou template string 
*/

console.log("Kaio é 'lindo'") //aspas duplas se usa para adiconar texto, se no texto adicionado existir alguma aspa simple melhor ainda

console.log('Bruno é "lindo"') //aspas simples se usa para adiconar texto, se no texto adicionado existir alguma aspa dupla melhor ainda

console.log(`

Barbosa ${1 + 1}

`) //crase se usa para adiconar texto, usando crases é permitido quebra de linha e adicionar expreções dentro das crases


//NUMBER: é um numero no js
/*
Tipos

33 = inteiros
12.5 = reais
NaN = not a number(Não um numero)
Infinity = infinito
*/

console.log(33) //inteiro (int)

console.log(12.2) //reais (float)

console.log(5 / "Kaio")  // NaN

console.log(Infinity) //Infinity. OBS: Infinity só existe com o i maiusculo, infinity não existe


// BOOLEAN
/*
Um tipo de dado que só tem dois valores

verdadeiro (true)
falso (false)

*/
console.log(true)

console.log(false)

/*
undefined (indefinido)
null (
    nulo
    objeto que não possui nada dentro
)
*/
console.log(undefined)

console.log(null)

console.log(null === undefined)

// OBJECT
/*
objeto
propriedade/atributo 
funcionalidades/métodos
{ propriedade:"valor" }
*/
console.log({
    nome:"Kaio Bruno Barbosa Magalhães",
    idade:18,
    andar: function(){
        console.log("andar")
    }
})

//ARRAY
/*
vetores
lista
agrupamento de dados
["Kaio", 18]
*/
console.log([
    "Batata",
    "Creme de leite",
    "Ovo",
    "Queijo"
])