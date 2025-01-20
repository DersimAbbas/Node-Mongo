const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");

mongoose.
connect("mongodb+srv://dersimcloud24:Delo12321@node-api-mongodb.eozli.mongodb.net/Products-API?retryWrites=true&w=majority&appName=node-api-mongodb")
.then(() => {
  console.log("connected to mongodb");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

})

app.get('/', (req, res) => { 
  res.send('mongoAPI')
})
  

app.get('/home',(req, res) => {
  res.sendFile(__dirname + "/api.html");
})

app.get('/C/user/:name', (req, res) => {
  res.send("you are using ur url");
});

app.post('/blogpost', (req,res) => {
  res.send("this is a post request");
});

