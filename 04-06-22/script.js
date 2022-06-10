const botaoAdicao = document.querySelector(".idade-adicao-button");
const botaoSubtracao = document.querySelector(".idade-subtracao-button");
const inputIdade = document.querySelector("input")

var idade = 0;

botaoAdicao.addEventListener("click", aumentarIdade);
botaoSubtracao.addEventListener("click", baixarIdade);


function aumentarIdade(){
    idade++;
    inputIdade.value =idade
}

function baixarIdade(){
    idade--;
    inputIdade.value = idade
}






