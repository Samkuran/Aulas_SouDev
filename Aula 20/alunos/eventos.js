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