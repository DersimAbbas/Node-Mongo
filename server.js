//default starting point to create api and connect to DB importing products file for DB
require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const port = 3000
const Product = require("./models/product");
app.use(express.json());

app.get("/api/product/:id", async(req, res) =>{
  try{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  }
  catch (error){
    res.status(500);
  }
})

app.put("/api/product/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product){
      return res.status(400).json({message: "product does not exist"});
    }
     res.status(200).json(product); 
  }
  catch (error){
    res.status(500).json({mesage: error.mesage});
  }
});
app.delete("/api/product/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product){
      return res.status(400);
    }
    
    res.status(200).json({message: "deleted"});
  }
  catch (error) {
    res.status(500);
  }
});

app.get("/api/products", async(req, res) => {
  try{
    const products = await Product.find({});
    res.status(200).json(products);
  }
  catch (error){
    res.status(500).json({message: error.message});
  } 

});

app.post("/api/product", async(req, res) => {
  console.log(req.body);
  res.send(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  }
  catch (error) {
    console.log(error.message)
    res.status(404);
  }
});

mongoose.
connect(process.env.MONGO_URI)
.then(() => {
  console.log("connected to mongodb");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
});
