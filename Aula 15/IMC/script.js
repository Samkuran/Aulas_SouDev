function calcularIMC(){
    event.preventDefault(); //desabilita uma função prevista, nesse caso, o navegador nao vai tentar ler o action do form.
    let mPeso = Number (peso.value); //esse comando vai converter o string em numero pro js, pois number no input só faz com que o usuario nao digite letras, no entanto, ao chegar os numeros escritos, estes sao lidos como string.
    //antes das variaveis sempre digite m
    let mAltura = Number (altura.value);
    let imc = (mPeso / (mAltura * mAltura)).toFixed(1); //esse tofixe, é pra que o valor resultante tenha apena 1 casa atras da vírgula


if(mPeso == 0){
    alert("Peso inválido");
    return;
}

if(mAltura == 0){
    alert("Altura inválida");
    return;
}

if(imc <= 18.5){
    alert("abaixo do peso: " + imc);
}   else if(imc > 18.5 && imc <= 24.9){
    alert("peso médio:" + imc);
}   else if(imc > 24.9 && imc <= 29.9){
    alert("Acima do peso:" + imc);
}   else if(imc > 29.9 &&  imc <= 35){
    alert("obesidade1" + imc);
}   else if(imc > 35 && imc <= 40){
    alert("Obesidade 2:" + imc);
}   else if(imc > 40){
    alert("Obesidade 3:" + imc);
}


}