const imagens = document.querySelectorAll(".slide")
const setaVoltar = document.querySelector("#seta-voltar")
const setaAvancar = document.querySelector("#seta-avancar")

let imagemAtual = 0

setaAvancar.addEventListener("click",function(){
    if(imagemAtual === imagens.length - 1){
        return
    }
    esconderImagemAberta()

    imagemAtual++
    mostraImagem()
    mostraOuEsconderSetas()
})

setaVoltar.addEventListener("click",function(){
    if(imagemAtual === 0){
        return
    }
    esconderImagemAberta()

    imagemAtual--
    mostraImagem()
    mostraOuEsconderSetas()
})

function mostraImagem(){
    imagens[imagemAtual].classList.add("mostrar")
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
}

function mostraOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade")
    }else{
        setaVoltar.classList.add("opacidade")
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1
    if(chegouNaUltimaImagem){
        setaAvancar.classList.add("opacidade")
    }else{
        setaAvancar.classList.remove("opacidade")
    }
}



