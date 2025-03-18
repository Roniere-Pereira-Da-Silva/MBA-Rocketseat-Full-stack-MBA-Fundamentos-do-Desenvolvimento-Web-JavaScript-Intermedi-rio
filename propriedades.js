const user = {
  name: 'Roniere',
  email: "ronierisilvaa@gmail.com",
  message : function(){
    console.log(`Olá ${user.name}`)
    console.log(`Olá ${this.name}`)
  },
}

user.message()