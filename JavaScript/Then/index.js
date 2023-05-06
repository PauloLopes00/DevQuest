// o then significa então

let ferveagua = (chaleiraestanofogo, fogaoestaligado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraestanofogo && fogaoestaligado){
            console.log("passo 1 finalizado: Fervendo água cuida")
            resolve()
        }else{
            console.log("erro é necessário ligar o fogão e colocar a chaleira no fogão para ferve a água")
            reject()
        }
    })
}

let chaleiraestanofogo = true
let fogaoestaligado = false

let passarCafe = () => console.log('passando o café')

ferveagua(chaleiraestanofogo, fogaoestaligado).then(passarCafe)
console.log('Fazendo café')