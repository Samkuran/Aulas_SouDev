const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require("./resources/banner/routes");
const marcaRoutes = require("./resources/marca/routes");
const enderecoRoutes = require("./resources/endereco/routes");
const carrinhoRoutes = require("./resources/carrinho/routes");
const comboRoutes = require("./resources/carrinho/carrinho-produto/routes");

const app = express();

app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(marcaRoutes);
app.use(enderecoRoutes); 
app.use(carrinhoRoutes);
app.use(comboRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
