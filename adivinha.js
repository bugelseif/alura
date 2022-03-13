const botao = document.getElementById("adivinha")
botao.addEventListener("click", adivinha)
const numeroSecreto = parseInt(Math.random() * 11)
console.log(numeroSecreto)

function adivinha(){
    const valor = parseInt(document.getElementById("valor").value)

    if(valor === numeroSecreto){
        document.getElementById("resultado").innerHTML = "Acertou"
    }else if(isNaN(valor) || valor>10 || valor<0){
        document.getElementById("resultado").innerHTML = "Digite um numero de 0 a 10"
    }else{
        document.getElementById("resultado").innerHTML = "Errou"
    }
}