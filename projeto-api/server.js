const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require("./resources/banner/routes");
const marcaRoutes = require("./resources/marca/routes");
const enderecoRoutes = require("./resources/endereco/routes");

const app = express();

app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(marcaRoutes);
app.use(enderecoRoutes); 

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
