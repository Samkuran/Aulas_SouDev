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

test('garante subtracao adequada', () => {
  expect(tabuada.subtrair(6, 5)).toBe(1);
});

test('garante subtracao adequada', () => {
  expect(tabuada.subtrair(6.6, 5.1)).toBe(1.5);
});

test('garante divisao adequada', () => {
  expect(tabuada.divisao(4, 2)).toBe(2);
});

test('garante divisao adequada', () => {
  expect(tabuada.divisao(4, 0)).toBe("n2 não pode ser 0");
});

test('garante divisao adequada', () => {
  expect(tabuada.divisao(4.4, 2)).toBe(2.2);
});

test('garante multiplicacao adequada', () => {
  expect(tabuada.multiplicar(4, 2)).toBe(8);
});

test('garante multiplicacao adequada', () => {
  expect(tabuada.multiplicar(4.6, 3.1)).toBe(14.26);
});
