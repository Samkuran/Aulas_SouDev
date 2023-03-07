function buscarCEP() {
    fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (conteudo) {
            logradouro.value = conteudo.logradouro;
            bairro.value = conteudo.bairro;
            cidade.value = conteudo.localidade;
            estado.value = conteudo.uf; 
        });

   
}


