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

let passarOcafe = (aguaFervida) => {
    return new Promise((resolve)=> {
        console.log('passo 2 finalizado:café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve)=> {
        console.log('passo 4 finalizado: Terminei de tomar o café')
        resolve(true)
    })
}

let lavarxicara = (cafeTomado) => {
    return new Promise((resolve)=> {
        console.log('passo 5 finalizado: terminei de lavar xícara')
        resolve(true)
    })
}

let chaleiraestanofogo = true
let fogaoestaligado = true

/*ferveagua(chaleiraestanofogo, fogaoestaligado)
.then(()=> {
    return passarOcafe()
}).then(() => {
    return tomarCafe()
}).then(() => {
    return lavarxicara()
}).then(() => {
    console.log('finalizando ritual do café, bora Trabalhar')
}).catch((err)=> {
    console.log(`Erro: ${err}`)
})*/

//usando async e await

 async function iniciarprocessoDefazercafe(){
    const aguaFervida =  await ferveagua(chaleiraestanofogo, fogaoestaligado)
    const cafePassado =  await passarOcafe(aguaFervida)
    const cafeTomado =  await tomarCafe(cafePassado)
    const xicaraLavada =  await lavarxicara(cafeTomado)
    if(xicaraLavada) console.log("finalizado agora arroxa no estudos")
}

iniciarprocessoDefazercafe()