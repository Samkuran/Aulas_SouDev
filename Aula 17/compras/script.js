// let item1 = "ovos";
// let item2 = "uvas";
// let items = ["ovos", "uvas"]; //só array usa colchetes, ele  usa varios valores, sendo definido como agrupamento de valores

let produtos = [];

function adicionarItem(){
    let produto = {
        nome: nome.value,
        preco: preco.value,
        qtd: qtd.value
    };
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    listarItems();
}

function listarItems(){
    let items = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = "";

    if(items && items.length > 0){
        produtos = items;
        for(let i = 0; i < items.length; i++){
            lista.innerHTML += `<li class="list-group-item">${items[i]}</li>`;
         }
    }
}

listarItems ();

