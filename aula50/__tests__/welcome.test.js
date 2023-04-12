const welcome = require('../src/welcome');

test('testar se quando a funçao funciona sem o nome de alguem', () => {
  let resultado = welcome();

  expect(resultado).toBe('Welcome');
});

test('se o nome da espaço automatico', () => {
  let resultado = welcome('Daniel');

  expect(resultado).toBe('Welcome Daniel');
})