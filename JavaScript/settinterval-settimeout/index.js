// setTimeout - Ele vai Executar um codigo depois de um determinado periodo de tempo
// setinterval - Ele vai executar um codigo repetidamente em um intervalo de tempo

//SetTimeout = 1000 = 1s / 2000 = 2s / 3000 = 3s

/*setTimeout(function(){
    console.log('Ola Mundo')
}, 2000)*/

//setInvertal 

/*setInterval(function(){
    console.log("Executando a cada 2 segundos")
}, 2000)*/

/*setTimeout(function(){
    console.log("Console dentro do Set")
}, 2000)

console.log('console depois do setTimeout')*/

//parando o SetInterval da mesma maneira serve para o setTimeout

let Iddointerval = setInterval(function(){
    console.log("Executando a cada 2 segundos")
}, 2000)


console.log(Iddointerval)
clearInterval(Iddointerval)