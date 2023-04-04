function remover(id) {
  let x = confirm("Selecione OK para Deletar");
  if (x == true) {
    fetch("http://localhost:8000/banners/" + id, {
      method: "DELETE",
    });
    alert("Deletado com sucesso");
    location.href = "banners.html";
  } else {
    alert("boa escolha");
  }
}

fetch("http://localhost:8000/banners")
  .then((res) => res.json())
  .then((dados) => {
    dados.map((cada) => {
      tabela_banners.innerHTML += `
          <tr>
            <td>${cada.id}</td>
            <td>${cada.titulo}</td>
            <td>${cada.descricao}</td>
            <td><img style="height: 60px; width: 60px;" src="${cada.imagem}" /></td>
            <td>
                <button class="btn btn-primary">Editar</button>
                <button class="btn btn-danger" onclick="remover('${cada.id}')">Excluir</button>
            </td>
          </tr>`;
    });
  });

function adicionar(){
    event.defaultPrevented();
    let banner = {
      titulo: titulo.value,
      descricao: descricao.value,
      imagem: imagem.value
    }

    fetch('http://localhost:8000/banners/', {
      headers:{
        'Content-type': 'application/json'
      }, 
      method: "POST",
    })
  }