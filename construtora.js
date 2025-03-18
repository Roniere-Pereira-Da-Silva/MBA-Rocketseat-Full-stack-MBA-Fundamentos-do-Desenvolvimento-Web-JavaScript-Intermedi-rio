// Nesta aula, vamos aprender sobre funções construtoras em JavaScript. Vamos criar uma função construtora para instanciar objetos, explicando o uso do operador new. Também vamos criar objetos com propriedades e métodos, além de exemplificar a instância de objetos com a função construtora. Também veremos a possibilidade de usar funções construtoras disponíveis no JavaScript, como String e Date. Além disso, vamos aprender uma abordagem alternativa para criar objetos usando funções construtoras.

function createProduct(name){
  const product = {}
  product.name = name
  product.details = function(){
    console.log(`O nome do produto é ${this.name}`)
}
return product
}
// o new cria um novo objeto na função construtora
const product1 = createProduct('Smartphone')
console.log(product1.name)
product1.details()

const product2 = createProduct('Notebook')
console.log(product2.name)
product2.details()

// console.log(product1 === product2)


// Exemplos de funções construtoras disponíveis no JavaScript
let myName = new String('Smartphone')
console.log(myName)


let price = "40.6".replace('.', '')
console.log(price)

let date = new Date('2021-01-01')
console.log(date)

function Person(name){
  this.name = name
  this.message = function(){
    console.log(`O nome da pessoa é ${this.name}`)
  }
}

const person1 = new Person('João')
console.log(person1.name)
person1.message()

const person2 = new Person('Maria')
console.log(person2.name)
person2.message()


