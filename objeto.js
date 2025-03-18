const product ={
    name: 'TV',
    price: 1000,
}


console.log(product.name)


console.log(product.price)
product.price = 2000
console.log(product.price)

console.log(product.name)
product.name = 'Smart TV'
console.log(product.name)


//notacao de colchetes
console.log(product['name'])
console.log(product['price'])
product['name'] = 'Smart TV'