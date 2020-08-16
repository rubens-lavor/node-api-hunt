const express = require("express");
const routes = express.Router();


// a lógica dentro das rotas é colocado no controller
//nesse caso n ProductController


//teste - 0k
/*
const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);

routes.post("/products", ProductController.store);

routes.get("/products/:id", ProductController.show);

routes.put("/products/:id", ProductController.update);

routes.delete("/products/:id", ProductController.destroy);
*/
/**
 * -----------------------------------------------------
*/


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
