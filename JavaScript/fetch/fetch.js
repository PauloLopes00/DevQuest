document.querySelector('#Botao').addEventListener("click",() => {
    cartaaleatoria()
})

async function CriarBaralhoEmbaralhado(){
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await  fetch(url)
    return await resposta.json()   
}

async function TiraumaCarta(deck_id){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function cartaaleatoria(){
    const baralho = await CriarBaralhoEmbaralhado()
    const carta = await TiraumaCarta(baralho.deck_id)
    const imagem = carta.cards[0].image
    document.querySelector('#Carta').src = imagem
}

cartaaleatoria()