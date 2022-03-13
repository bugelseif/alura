const botao = document.getElementById("converte");
botao.addEventListener("click", converte)

function converte(){
    const valor = parseFloat(document.querySelector("#valor").value)
    console.log(valor)
    if(!!valor){
        document.getElementById("valorConvertido").innerHTML = "O valor em R$ " +(valor*5)
    }else{
        document.getElementById("valorConvertido").innerHTML = "Reveja o valor"
    }
}