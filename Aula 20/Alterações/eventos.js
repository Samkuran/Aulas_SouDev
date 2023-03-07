const tabela = document.getElementById("tabela") || null

if (localStorage.getItem('darkmode') === "true"){
    dark.checked = true; // marcando o input/switch
    alterarCores();
}

function ativarDarkmode (){
    if (dark.checked) {
        localStorage.setItem('darkmode', true);
    } else {
        localStorage.setItem('darkmode', false);
    }

    alterarCores();

} 

function alterarCores (){
    if (dark.checked) {
        document.body.classList.add('bg-dark');
        document.body.classList.add('text-white');
        tabela && tabela.classList.add('table-dark'); //pode fazer document.getElementById('tabela').classList.add(bla bla)
    } else {
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('text-white');
        tabela && tabela.classList.remove('table-dark');
    }
}

let alunos = [
    {
        id: 1,
        nome: "Ana kelly",
        email: "kelly@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-ce"
    },
    {
        id: 2,
        nome: "Andy Silva",
        email: "andy@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-ce"
    },
    {
        id: 3,
        nome: "Lane Gomes",
        email: "lane@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-ce"
    },
    {
        id: 4,
        nome: "Sara Camilo",
        email: "sara@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-ce"
    },
    {
        id: 5,
        nome: "Samantha Kuran",
        email: "samkuran@gmail.com",
        telefone: "00 0000-0000",
        cidade: "Fortaleza-ce"
    },
]

let tabela_tbody = document.getElementById("tabela-body");

alunos.forEach((alunos) => {
    tabela.innerHTML += `<tr>
                        <td>${alunos.nome}</td>
                        <td>${alunos.email}</td>
                        <td>${alunos.telefone}</td>
                        <td>${alunos.cidade}</td>
                        <td><button class="btn btn-warning">Editar</button>
                            <button class="btn btn-danger">Excluir</button>
                        </td>
                    </tr>`;
})

function salvarAluno (){
    event.preventDefault();

    let alunos = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    }
    console
}




