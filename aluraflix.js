window.addEventListener("load", listaFilmes);
const flix = document.getElementById("flix");
console.log(flix)
const lista = [
    "https://cinearaujo.com.br/filmes/filme3085_cp.png",
    "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22968-cartaz.jpg",
    "https://cinema10.com.br/upload/filmes/filmes_9701_MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg?default=poster",
    "https://br.web.img3.acsta.net/pictures/19/03/12/17/42/1157358.jpg"
]

function listaFilmes(){
    lista.forEach(filme => {
        const imagem = document.createElement("img")
        imagem.setAttribute('src', filme);
        imagem.setAttribute('class', "filme");
        console.log(imagem)
        flix.appendChild(imagem)
        
    });
}
