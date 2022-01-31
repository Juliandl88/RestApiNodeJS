const express = require("express");

const { ProductsController } = require("./controller ")

const router = express.Router();

module.exports.ProductsApi = (App) => {
  router
    .get("/", ProductsController.getProducts)   //http://localhost:3000/api/products
    .get("/:id", ProductsController.getProduct) //http://localhost:3000/api/products/23
    .post("/", ProductsController.createProduct) //http://localhost:3000/api/products);

    App.use("/api/products", router);
};
