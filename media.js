const botao = document.getElementById("media");
botao.addEventListener("click", media)

function media(){
    const notas = document.querySelectorAll(".notas")
    let soma = 0;
    
    for (let i = 0; i < notas.length; i++) {
        if(notas[i].value>10 || notas[i].value<0 || notas[i].value===''){
            document.getElementsByTagName("h2")[1].innerHTML = "Reveja as notas";
            break;
        }else{
            soma += parseFloat(notas[i].value);
            document.getElementsByTagName("h2")[1].innerHTML = "A média é: " + soma/4;
        }
    }        
}