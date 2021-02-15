const express = require('express')
var app = express()
const port = 3000


var pizzas = [
  { name: 'Margherita', price: 5, ingredients: ["tomato", "mozzarella" ]},
  { name: 'Bufala', price: 6, ingredients: ["tomato", "mozarella di bufala"]},
  { name: 'Romana', price:5, ingredients: ["tomato", "mozzarella", "anchovies", "oregano", "oil"]}, { name: 'Diavola', price: 7.5, ingredients: ["tomato", "mozzarella", "spicy salami"]}, { name: 'Pizza Bianca', price: 5, ingredients: ['mozzarella', 'oregano']} 
];
//how many items on the order
var order = [
  {items: 1}, {items: 2}, {items: 1}
]
//itens on the orders
var orderItem = [
  {pizza: [pizzas[0]], quantity: 1}, {pizza: [pizzas[2], pizzas[1]], quantity: 2}, {pizza: [pizzas[3]], quantity: 1}
]

app.get('/api/pizzas', function(req, res) {
	res.send(pizzas)
})

app.get('/api/orders', function(req, res){
	res.send(orderItem)
})

app.get('/api/orders/:id', function(req,res){
	var id = req.params.id
	var orderById = orderItem[id];
	res.send(orderById);
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
