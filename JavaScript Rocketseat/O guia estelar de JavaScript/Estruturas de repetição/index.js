//for
for (let i = 0 /*declarando variavel*/; i <=10 /*Condição do for*/; i++ /*equanto a condição não for verdadeira rodar essa parte*/) {
    console.log (i) //enquanto a condição não ser verdadeira printar na tela a variavel e incrementar o ultimo comando i++
}  

for (let u = 100; u >=1; u-- ) { //codigo for decramentando
    console.log(u)
}

for (let a = 100; a >=1; a-- ) { //codigo for decramentando, mas se a variavel for igual a algum valor declarado, pare. Codigo possivel com if.
    console.log(a)
    if(a === 50) {
        break
    }
}
for (let o = 10; o > 0; o-- ) { //codigo for, decramentando mas quando chegar no 5 pular
    if(o === 5) {
        continue
    }
    console.log(o)
}

//While

let numero = 49586394505
while (numero > 10) {
    console.log(numero) // while(enquanto) enquanto numero (49586394505) maior que 10 dividir por 30 
    numero /= 30;
}

//for of

let name = 'Kaio'
let names = [
    'Jão', 'Paulo', 'Bruno'
]
for (let char of name ) {
console.log(char)
} 

for (let name of names) {
    console.log(name)
}

//For in

let person = {
    name: 'Kaio',
    age: 18 ,  
    height: 1.75
}
for(let property in person) {
    console.log(property)
    console.log(person[property])
}