/*
//declaration
var name

// assignment 
name = "Kaio"

//Qual tipo de dado foi atribuido à variavel
console.log(typeof name)


// Agrupamento de declarações
let age, isHuman 

age = 18
isHuman = true

console.log(name, age, isHuman)
*/

/*
let name, age, from

name = "Kaio"
age = 
from = "Brazil"

// concatenando os valores
console.log ('Eu ' + name + ' tenho ' + age + ' e moro no ' + from)

// interpolando valores com template literals or template string (crase)
console.log (`Eu ${name} tenho ${age} e moro no ${from}`)
*/

// Object

/*
const person = {
    name: 'Kaio',
    age: 18,
    weight: 72.2,
    from : 'Brazil',
    isAdmin: true
}
*/
// console.log(`Eu, ${person.name} tenho ${person.age} estou pesando atualmente ${person.weight} e moro no ${person.from}`)


// Array

/*
const animals = [
    'Dog',
    'Cat',
    'Pig',
    {
        name: 'Horse',
        age: 2
    }
]
console.log(animals[1])
console.log(animals[3].name) //Posso ter um  object em uma array
*/


let weight
console.log(typeof weight)


/*
let  name, age, stars, isSubscribed 

name = "Kaio"
age = 18
stars = 1.2
isSubscribed = false
*/
const studentOne = {
    name: 'Bruno',
    age: 19,
    weight: 72.2,
    from : 'Brazil',
    isAdmin: true
};

// console.log(`${student.name} de ${student.age} pesa ${weight} kg`);


let students = []

students = [
    studentOne
]
console.log(students)
console.log(students[0])


const studentTwo = {
    name: 'Kaio', 
    age: 18,
    stars: 1.4,
    isSubscribed: true
};

students [1] = (studentTwo)
console.log(students[1])

console.log(a)
var a = 1