//READ
function listarAlunos(){

    //let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    let alunos = [];
        fetch(`http://localhost:3000/alunos`)
        .then(res => res.json ())
        .then(alunos => {
            let tabela = document.getElementById("tabela-body");
    tabela.innerHTML = "";
    alunos.forEach((aluno, key) => {
        tabela.innerHTML += `<tr>
                                <td>${aluno.id}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.email}</td>
                                <td>${aluno.telefone}</td>
                                <td>${aluno.cidade}</td>
                                <td>
                                    <button class="btn btn-warning">Editar</button>
                                    <button class="btn btn-danger" onClick="deletarAluno(${aluno.id})">Excluir</button>
                                </td>
                            </tr>`;
    })
        })    
}

//CREATE
function salvarAluno(){
    event.preventDefault();
    // let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    } 
fetch("http://localhost:3000/alunos" , {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(aluno)
})
    .then(res => res.json())
    .then(resposta => {
        alert("Salvo com Sucesso!");
        console.log(resposta)
    })


    // alunos.push(aluno);
    // localStorage.setItem('alunos', JSON.stringify(alunos));
    

}

//UPDATE
function atualizarAluno(){}

//DELETE
function deletarAluno(id){
fetch(`http://localhost:3000/alunos/${id}` , {
    method: "DELETE",
})
.then(res => res.json())
.then(resposta => {
 alert("Excluido com sucesso!");
 console.log(resposta);
 listarAlunos();
    })      
}