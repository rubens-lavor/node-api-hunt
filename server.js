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

//rotas
app.use("/api", require("./src/routes"));

app.listen(3001);