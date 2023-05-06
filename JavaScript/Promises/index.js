/* 
pendente
realizada resolve
recusada reject
estabelecida
*/

//new promise((resolve, reject) => {

//})

let ferveagua = (chaleiraestanofogo, fogaoestaligado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraestanofogo && fogaoestaligado){
            console.log("Fervendo água cuida")
            resolve()
        }else{
            console.log("erro é necessário ligar o fogão e colocar a chaleira no fogão para ferve a água")
            reject()
        }
    })
}

let chaleiraestanofogo = true
let fogaoestaligado = false
ferveagua(chaleiraestanofogo, fogaoestaligado)
console.log('Fazendo café')