const express = require("express");
const app = express.Router();
const controller = require("./controller");
const urlMarca = "/marcas";


app.get(`${urlMarca}`, async (req, res) => {
  res.send(await controller.listAll());
})

app.get("/marcas/:id", async (req, res) => {
  res.send(await controller.listOne(req.params.id));
})

app.post(`${urlMarca}`, async (req, res) => {
  res.send(await controller.create(req.body));
});




module.exports = app;