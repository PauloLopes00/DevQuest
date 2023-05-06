//promises são como promessas da vida real, ela está esperando algum retorno;
//para criar uma promessa instanciamos a classe promise
//que leva dois argumentos resolve (solução) e reject (erro)
//para encadear mais processos utilizamos o método then;
//alguns recursos de JS(fetch api) e biblioteca retornam promises

const mypromises = new Promise((resolve, reject)=> {
    const nome = "Matheus"

    if(nome === 'Matheus'){
        resolve('Usuário Matheus encontrado')
    }else{
        reject('não encontrado')
    }

})

mypromises.then((data) => {
    console.log(data)
})

//encadeamento de then's

const mypromises2 = new Promise((resolve, reject)=> {
    const nome = "Matheus"

    if(nome === 'Matheus'){
        resolve('Usuário Matheus encontrado')
    }else{
        reject('não encontrado')
    }

})

mypromises2
    .then((data) => {
        return data.toLowerCase()
}).then((stringmodificada) => {
    console.log(stringmodificada)
})

//retorn do catch

const mypromises3 = new Promise((resolve, reject)=> {
    const nome = "pedro"

    if(nome === 'Matheus'){
        resolve('Usuário Matheus encontrado')
    }else{
        reject('não encontrado')
    }

})

mypromises3.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log('aconteceu algo de errado: ' + err)
})

//RESOVER VÁRIAS PROMESSAS COM ALL

const p1 = new Promise((resolve, reject) => {
    resolve('P1 ok!')
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})

//RESOVER VÁRIAS PROMESSAS COM RACE

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p4 ok!')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

const resolveAllRace = Promise.race([p4,p5,p6]).then((data) => {
    console.log(data)
})

//fetch request na api do github
//fetch api

const userName = "PauloLopes00"

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept:'aplication/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) => {
    const nome = document.querySelector('.teste')
    nome.innerHTML =`O nome do Usuário no GitHub é: ${data.name}`
    console.log(`O nome do Usuário é: ${data.name}`)
}).catch((err) => {
    console.log(`Houve Um erro: ${err}`)
})
