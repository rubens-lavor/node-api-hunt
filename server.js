const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');

const requireDir = require("require-dir");

const cors = require("cors");

const path = require('path');
const { error } = require("console");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const MONGODB_URL = 'mongodb+srv://rubens:rubens123@node-api.nx04e.mongodb.net/api-node-BD?retryWrites=true&w=majority';
//iniciando o DB
mongoose.connect(MONGODB_URL || 'mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    await app.listen(PORT);
    console.log(`Server is starting at ${PORT}`);
}).catch(error => console.error(error));

mongoose.connection.on('connected', () => {
    console.log('mongoose connected');
});

//model registrado na aplicação
require('./src/models/Product');

//com o requireDir
requireDir("./src/models");


//rotas
app.use("/api", require("./src/routes"));


app.use(morgan('tiny'));

/*
app.get('/api', (req, res) => {
    const data = {
        username: 'rub',
        age: 5
    };
    res.json(data);
});

app.get('/api/nome', (req, res) => {
    const data = {
        username: 'josé',
        age: 2
    };
    res.json(data);
});
*/


//app.listen(PORT, console.log(`Server is starting at ${PORT}`));

/*
const requireDir = require("require-dir");

const cors = require("cors");

//iniciando o App
const app = express();

app.use(express.json());
app.use(cors());

//rubens123
//mongodb+srv://rubens:<password>@node-api.nx04e.mongodb.net/<dbname>?retryWrites=true&w=majority
// || "mongodb://localhost:27017/nodeapi"

const MONGODB_URL = "mongodb+srv://rubens:rubens123@cluster0.nx04e.mongodb.net/hunt?retryWrites=true&w=majority"
//iniciando o DB
mongoose.connect(MONGODB_URL || "mongodb://localhost:27017/nodeapi",
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true
    });

mongoose.connection.on ('connected', () => {
    console.log("siiiiim");
});
//model registrado na aplicação
// require('./src/models/Product');

//com o requireDir
requireDir("./src/models");


//rotas
app.use("/api", require("./src/routes"));

/*
if (process.env.NODE_ENW === 'prodution') {

}
*/


//app.listen(process.env.PORT || 8080);



//instalando o insomnia para vizualizar as rotas de maneira mais fácil