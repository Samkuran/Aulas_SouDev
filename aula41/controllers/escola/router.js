//importando o express
const express = require("express");

//importando a conexao que agora esta isolada:
const database = require("../../connection/database");

//importando a biblioteca de conectar banco de dados
//const mysql2 = require("mysql2/promise");

//criando app para adicionar as novas rotas/endpoints
const app = express.Router();

app.get("/escolas", async (req, res) => {
  let dados = await database.execute("SELECT * FROM tb_escola");
  // esse texto dentro de parenteses é o valor do sql definido la no arquivo de conexoes//

  res.send(dados);
});

app.get("/escolas/:id", async (req, res) => {
  let dados = await database.execute(
    `SELECT * FROM tb_escola WHERE id='${req.params.id}'`
  );
  // esse texto dentro de parenteses é o valor do sql definido la no arquivo de conexoes//

  res.send(dados[0]); //esse [0] faz com que venha apenas o array especifico.. e nao camada de array, faz o teste sem esse array q vc vai entender
});

app.delete("/escolas/:id", async (req, res) => {
  let dados = await database.execute(
    `DELETE FROM tb_escola WHERE id='${req.params.id}'`
  );

  res.sendStatus(204); //signofica que funcionou mas nao tem conteudo na repsosta
});

app.post("/escolas", async (req, res) => {
  
  let sql = await database.execute(
    `INSERT INTO tb_escola (nome, endereco) VALUES ('${req.body.nome}', '${req.body.endereco}')`
  );

  let escola = await database.execute(`SELECT * FROM tb_escola WHERE id = ${sql.insertId};`);

  res.status(201).send(JSON.stringify(escola[0]));
});

module.exports = app;
