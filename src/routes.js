const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");


routes.get("/products", ProductController.index);

routes.get("/products/:id", ProductController.show);

//.post sempre que for criar algo
routes.post("/products", ProductController.store);

//para criar a rota de atualização usa-se o método put
//tbm precisa do id, aí é só chamar o método update
routes.put("/products/:id", ProductController.update);


routes.delete("/products/:id", ProductController.destroy);


module.exports = routes;