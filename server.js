const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o App
const app = express();

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true , useUnifiedTopology: true});

//model registrado na aplicação
// require('./src/models/Product');

//com o requireDir
requireDir("./src/models");

//verificando se consegue salvar algo no bando de dados
const Product = mongoose.model("Product");

//Primeira rota
app.get('/',(req, res) => {

    Product.create({
        title: "React Native",
        description: "Build native apps with React",
        url: "https://github.com/facebook/react-native"
    })
    return res.send("hello word!!!")
});

app.listen(3001);