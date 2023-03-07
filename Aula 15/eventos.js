// Estrutura de dados simples, pois é uma sequencia que nao pula resposta.

// let idade = prompt("olá, qual a sua idade?");

// alert("Que legal, vc tem " + idade);

// if (idade < 14 ) {
//     alert("voce é uma criança");
// }

// if (idade >= 14 && idade < 18) {
//     alert("vc é um adolescente");
// }

// if (idade >= 18 && idade <60){
//     alert("vc é um adulto");
// }

// if (idade >= 60) {
//     alert('vc é idoso');
// }



// Estrutura de dados composta, no entanto.. há elementos desnecessarios.. ver versao 3
// let idade = prompt("olá, qual a sua idade?");

// alert("Que legal, vc tem " + idade);

// if (idade < 14 ) {
//     alert("voce é uma criança");
// } else if (idade >= 14 && idade < 18) {
//     alert("adolescente");
// } else if (idade >= 18 && idade < 60) {
//     alert("adulto");
// } else if (idade >= 60) {
//     alert("idoso");
// }



// let idade = prompt("olá, qual a sua idade?");

// alert("Que legal, vc tem " + idade);

// if (idade < 14 ) {
//     alert("voce é uma criança");
// } else if (idade < 18) {
//     alert("adolescente");
// } else if (idade < 60) {
//     alert("adulto");
// } else {
//     alert("idoso");
// }

// Trinagulos 

let ladoA = prompt("qual o lado A?");
let ladoB = prompt("qual o lado B?");
let ladoC = prompt("Qual o lado C?");

if (ladoA == 0 && ladoB < 1 && ladoC < 1) {
    alert ("erro, tente novamente");
} else if (ladoA == ladoB && ladoB == ladoC) {
    alert ("equilatero");
} else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
    alert ("escaleno");
} else if ( all = 0) {
    alert ("erro, tente novamente");
} else {
    alert ("isoceles");
}
