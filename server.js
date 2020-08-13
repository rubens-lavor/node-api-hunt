const express = require('express');
const mongoose = require('mongoose');

//iniciando o App
const app = express();

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true , useUnifiedTopology: true});

//Primeira rota
app.get('/',(req, res) => {
    res.send("hello word!!!")
});

app.listen(3001);