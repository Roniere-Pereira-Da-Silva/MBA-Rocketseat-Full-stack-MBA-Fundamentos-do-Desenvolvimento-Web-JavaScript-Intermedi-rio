/*
Operador de coalescência nula (??)
O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu operando do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
*/

let a = undefined
console.log(a ?? "valor de a é null ou undefined")

const user = {
    name: "Lucas",
    picture: "roniere.png"

}

console.log(user.picture ?? "roniere.jpg") // https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50