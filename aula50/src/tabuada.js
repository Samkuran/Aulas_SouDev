function somar (n1, n2){
  let soma = n1 + n2;
  return Number(soma.toFixed(4));
}

function subtrair(n1, n2){
  let resultado = n1 - n2;

  return Number(resultado.toFixed(2));
};

function divisao(n1, n2){
  if(n2 !== 0){
    let resultado = n1 / n2;
    return Number(resultado.toFixed(2));
  }

  return "n2 não pode ser 0";
  
};

function multiplicar(n1, n2){
  let resultado = n1 * n2;
  return Number(resultado.toFixed(2));
}

module.exports = {
  somar,
  subtrair,
  divisao,
  multiplicar
};