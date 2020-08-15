const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const cors = require("cors");

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true , useUnifiedTopology: true});

//model registrado na aplicação
// require('./src/models/Product');

//com o requireDir
requireDir("./src/models");


//rotas
app.use("/api", require("./src/routes"));

app.listen(3001);

//instalando o insomnia para vizualizar as rotas de maneira mais fácil