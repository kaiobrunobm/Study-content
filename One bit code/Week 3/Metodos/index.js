// Metodos

// Os metodos são funções dentro de objetos, existem muitos metodos preprontos como o proprio console.log, mas a gente pode fazer um metodo.
let person = {
  name: "Kaio",
  age: 18,
  // metodo
  say_hi() {
    console.log(`Hello world! My name is ${this.name}`); // this.name é usado assim como o console.log de uma forma diferente já que ele vai pegar o elemento do objeto presente, por exemplo aqui ele pega o name do objeto presente.
  },
};

console.log(person);

// Aqui vemos o chamado da function que está dentro do objeto
person.say_hi();
