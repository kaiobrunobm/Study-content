// VARIÁVEIS: São espaços nas memorias dentro de algum nome simbolico.
/*
variaveis dá o poder de criar atalhos para o codigo e indentificadores

Podemos usar 3 palavras para criar uma variavel sendo elas.

var
let
const
*/

var clima = "Quente"
console.log(clima)

let tempo = "Frio" 
console.log(tempo)

const temporal = "Chuvoso" //variaveis do tipo const não pode ser alterada depois que seu valor é determinado
console.log(temporal)

var timen = 68
console.log(timen)

console.log(typeof clima) //typeof é usado para visualizar o tipo da variavel no caso com o console.log eu pedi para printar esse tipo no devtools
console.log(typeof timen) // tipo number por exemplo

// Atualmente os tipos de var mais usados são o let e const, deixando o var mais de lado

//SCOPE: Determina a visibilidade de alguma variavel no js  

/*
Block statement
é um bloco no codigo js por exemplo
{
    Alguma coisa dentro
}
*/
{
    let x = 12
    console.log (x)
}

// scope var: o var é um scope global

//global
console.log ('> existe x antes do bloco?', x)

{
    //local: scope local é o dentro de um bloco
    var x = 0
    //local
}

console.log('> existe x depois do bloco?', x)
//global


// scope let e const: são scope locais e só  funcionam no escopo onde foi criada 

{
    let y = 0
    console.log('>  existe y depois e dentro do bloco?', y)// no scope const e let só tem funcionalodade local, ou seja o codigo so vai funcinar se a sintaxe dentro do bloco ({}) estiver correta
}

/*
Posso:
    Iniciar com esses caracteres especiais: $-
    Iniciar com letras
    Colocar acentos
    Letras maísculas e minúsculas fazem diferença
Não posso:
    Iniciar com números
    Colocar espaços vazios no nome
Ideal:
    Criar nomes que fazem sentido
    Que explique o que a variável é ou faz
    camelCase
    snake_case
    Escrever em inglês
   */