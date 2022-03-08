const botao = document.getElementById("calcular");
botao.addEventListener("click", media)

function media(){
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);
    const n4 = parseFloat(document.getElementById("nota4").value);

    const resultado = (n1+n2+n3+n4)/4;
    document.getElementsByTagName("h2")[1].innerHTML = resultado
}
