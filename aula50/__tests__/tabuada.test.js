const tabuada = require('../src/tabuada');

test('garante que somar retorna valor correto', () => {
    expect(tabuada.somar(10, 20)).toBe(30);
});

test('garante que somar numeros negativos retorna valor correto', () => {
  expect(tabuada.somar(10, -20)).toBe(-10);
});

test('garante somar consiga lidar com numeros reais', () => {
  expect(tabuada.somar(8.1, 10.6)).toBe(18.7);
});