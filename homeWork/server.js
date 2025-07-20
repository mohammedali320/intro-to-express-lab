const express = require('express');
const app=express()

console.log(app)

//ex1
app.get('/greetings/:username',(req,res)=>{
    console.log(req.params.username);
    res.send(`hello ${req.params.username}`)
})

//ex2
app.get('/roll/:number',(req,res)=>{
    console.log(req.params.number);
    req.params.number=parseInt(req.params.number)
    if(req.params.number===req.params.number){
        const rand = Math.floor(Math.random() * (req.params.number + 1));
        res.send(`You rolled a  ${rand}`)

    }
    else{
        res.send(`You must specify a number`)
    }
})

//ex3
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
app.get('/collectibles/:index',(req,res)=>{
  const indx = parseInt(req.params.index);

  if (isNaN(indx) || indx < 0 || indx >= collectibles.length) {
    res.send("This item is not yet in stock. Check back soon!");
  } else {
    const item = collectibles[indx];
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
  }
})

//ex4
const shoes = [
 { name: "Birkenstocks", price: 50, type: "sandal" },
 { name: "Air Jordans", price: 500, type: "sneaker" },
 { name: "Air Mahomeses", price: 501, type: "sneaker" },
 { name: "Utility Boots", price: 20, type: "boot" },
 { name: "Velcro Sandals", price: 15, type: "sandal" },
 { name: "Jet Boots", price: 1000, type: "boot" },
 { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
  let result = shoes;
  const type = req.query.type;

  if (!isNaN(parseFloat(req.query['min-price']))) {
    result = result.filter(shoe => shoe.price >= parseFloat(req.query['min-price']));
  }
  if (!isNaN(parseFloat(req.query['max-price']))) {
    result = result.filter(shoe => shoe.price <= parseFloat(req.query['max-price']));
  }
  if (type) {
    result = result.filter(shoe => shoe.type === type);
  }

  res.send(result);
});

app.listen(3000,()=>{
    console.log('working')
})