// OPTIONAL CHAINING (?) - É uma forma de acessar propriedades de objetos que talvez não existam sem que seja lançado um erro.
// util para acessar propriedades de objetos aninhados sem precisar verificar se cada nível é válido. determinadas propriedades obrigatorias para o funcionamento do código.

const user ={
  id: 1,
  name: 'João',
  address: {
    city: 'São Paulo',
    state: 'SP',
  
  geo:{
    lat: 123123,
    lng: 321321,
  },
},
message : function() {
console.log(`ola, ${this.name}!`)
}
};                                                                      

console.log(user?.address)
console.log(user?.address?.city); // São Paulo    


user.message?.(); // ola, João!