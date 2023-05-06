const perguntaeresposta = document.querySelectorAll(".item")


perguntaeresposta.forEach(function(item){
    item.addEventListener("click", function(){
        const itemativoatual = document.querySelector(".ativo")
        if(itemativoatual){
            itemativoatual.classList.remove("ativo")
        }
        item.classList.add("ativo")
    })
})

