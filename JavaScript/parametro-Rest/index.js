//parâmetro Rest
// ele vai ser passado pra função que vai ser tratado como um array 

/* 
function(a, b, ...args){
    //...
}
*/
function incentivarQuester(mensagem, ...nomeQuester){
    nomeQuester.map(nomequester => console.log(`${mensagem} ${nomequester} `))
}

incentivarQuester('Você é Craque demais', ' Paulo H', ' joão', ' Carioca')