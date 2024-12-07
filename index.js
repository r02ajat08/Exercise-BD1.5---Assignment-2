let express = require('express');
const { resolve } = require('path');
let cors =require("cors");


const app = express();
const port = 3000;
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Welcome to stock portfolio analysis API!");
});

// Q-1
app.get("/calculate-returns",(req,res)=>{
  let boughtAt =parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);

  let totalReturn = (marketPrice - boughtAt) * quantity;
  res.send(totalReturn.toString());
});
// q-2

app.get("/total-returns",(req,res)=>{
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
    let result =stock1+ stock2 + stock3 + stock4;
  res.send(result.toString());
});

// Q-3
app.get("/calculate-return-percentage",(req,res)=>{
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

// Q-4
app.get('/total-return-percentage', (req, res) => {
  // Parse the query parameters
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;

  res.send(totalReturnPercentage.toString());
});

// q-5

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);

  let stockStatus;
  if (returnPercentage > 0) {
    stockStatus = 'profit';
  } else {
    stockStatus = 'loss';
  }
  res.send(stockStatus);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
