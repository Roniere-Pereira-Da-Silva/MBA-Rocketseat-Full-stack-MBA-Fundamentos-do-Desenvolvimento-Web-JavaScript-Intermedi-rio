// OBJETO
// -uma colecao de de dados e/ou funncionnalidades;
// -Podem ter Propriedades e metodos;

// Cria um objeto

const obj = {}
console.log(obj)
console.log(typeof obj)

// cria um objeto com propriedades e metodos 
const user = {
  email :"ronierisilvaaa@gmail.com",
  age: 18,
  name:{
    firstName: "Roniere",
    surname:"Goncalves",

  },
  address:{
    sreet: "Rua X",
    number: 23,
    cyty:"sao paulo",
    postal_code:"12345-123"
  },
  message :function(){
    console.log("Ola Roniere")
  } 
}

// acessando propriedades do objeto e metodos do usuario
console.log(user.email)
//acessando propriedades do objeto 
console.log(user.name.firstName)
console.log(user.address.cyty)

// Executando metodos do objeto
user.message()

// notacao de colchetes
console.log(user["email"])
console.log(user["name"]["firstName"])
user["message"]()