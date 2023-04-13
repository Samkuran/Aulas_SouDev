const controller = require('../../resources/category/controller');

test('testando o endpoint buscar todos', async () => {
  let resultado = await controller.listAll();
  expect(typeof JSON.parse(resultado)).toBe('object');
})

test('testando o endpoint buscar um', async () => {
  let resultado = JSON.parse(await controller.listOne(1));
  expect(typeof resultado).toBe('object');
  expect(typeof resultado.id).toBe('number');
  expect(typeof resultado.nome).toBe('string');
  expect(typeof resultado.status).toBe('number');
  expect(typeof resultado.created_at).toBe('string');
})

test('inserir tabela', async () => {
    let dados = {
      nome: 'teste',
      status: 1,
    }
    let resultado = JSON.parse(await controller.create(JSON.stringify(dados)));
    expect(typeof resultado).toBe('object');
    expect(typeof resultado.id).toBe('number');
})