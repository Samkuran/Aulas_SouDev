const db = require("../../connection/database");
const table = "tb_marca"; 

async function listAll(){
    let lista = await db.execute(`
        SELECT * FROM ${table};
    `);
    return JSON.stringify(lista);
}

async function listOne(id){
  let lista = await db.execute(`
      SELECT * FROM ${table} WHERE id= ${id};
  `);
  return JSON.stringify(lista[0]);
}

async function create (corpo){

  let sql = await db.execute(`
      INSERT INTO ${table} (nome) VALUES ('${corpo.nome}');
  `);
  let marcas = await db.execute(`
      SELECT * FROM ${table} WHERE id = ${sql.insertId};
  `)

  return JSON.stringify(marcas[0]);
}


module.exports ={
  listAll,
  listOne,
  create
}