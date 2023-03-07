// document.write("Olá mundo")
// document.write("<p>nosso paragrafo</p>")
// document.write('<button class="btn btn-primary">meu botao</button>');

// //alert("minha mensagem");
// let body = document.querySelector("button"); // como eu chamo um seletor do html
// body.addEventListener("mouseleave", function(){alert("Volte aqui")})

//Nosso primeiro chat da uol:
// alert("oi sumida");
// let resposta = prompt();
// if(resposta == "oi"){
//     alert("Eita como ela tá fria...");}
// alert("ta tudo bem?");
// let resposta2 = prompt();
// if(resposta2 == "tudo"){
//     alert("ta muito ocupada ne?");}
// else{
//     alert("ta fazendo o que?");}



//Nosso chatbot

let conversas = document.querySelector(".conversas");
let botao = document.querySelector(".btn");
let resposta = document.querySelector("#respostas");

conversas.innerHTML = "<div>Olá Seja bem vindo(a), em que posso lhe ajudar?</div>";

setTimeout( () => {
   conversas.innerHTML += "<div>1. Financeiro <br>2. Acadêmico<br>3. Comercial</div>";}, 2000);

botao.addEventListener("click", () => {
    switch(resposta.value){
        case "1":
            conversas.innerHTML += "<div>Entendi, vc escolheu Financeiro</div>";
            break;
            case "2":
            conversas.innerHTML += "<div>Entendi, vc escolheu Academico</div>";
            break;
            case "3":
            conversas.innerHTML += "<div>Entendi, vc escolheu Comercial</div>";
            break;
    }
});