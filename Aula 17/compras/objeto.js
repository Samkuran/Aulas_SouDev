// let pessoa = {
//     altura: 1.77,
//     pele: {
//         tom: "clara",
//         tipo: "oleosa"
//     },
//     olhos: "castanhos",
//     cabelo: "preto",
//     idade: 32
// }

let produto = {
    nome: "arroz",
    preco: 4.69,
    quantidade: 3
}

let lista = [
    {
        nome: "arroz",
        preco: 4.69,
        qtd: 3
    },
    {
        nome: "ovos",
        preco: 17.00,
        qtd: 1 
    }
];

for(let i = 0; i < lista.length; i++){
    document.write(lista[i].nome+"<br>");
}
