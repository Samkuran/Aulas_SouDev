const produto = require('./controllers/produto');
const categoria = require('./controllers/categoria');
const cliente = require('./controllers/cliente');

//importando diretamente do node
const http = require('http');

const PORTA = 8000;
const ENDERECO = 'localhost';

//essa funcao sempre sera executada quando alguma requisição for feita ao servidor
function recepcao (req, res){
    let resposta = JSON.stringify({
        "erro": "Página nao encontrada"
    });

    switch(req.url){
        case "/clientes":
            resposta = cliente.buscar();
            break;
        case "/produtos":
            resposta = produto.buscar();
            break;
        case "/categoria":
            resposta = categoria.buscar();
    }

    res.end(resposta);
}

//criando o servidor e colocando ele pra eele ESCCUTAR as requisiçoes
http.createServer(recepcao).listen(PORTA, ENDERECO, () => {
    console.log('---------------------------');
    console.log('---   A veia ta ON...   ---');
    console.log('---------------------------');
    console.log('-------------by: Rosana ---');
});