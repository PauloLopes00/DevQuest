//Operador Spread (...) ele retorna cada item separado

const pessoas = ['Roberto', 'Ricardo', 'Raphael']
//console.log(...pessoas)

/* concatenar dois arrays */

//antigamente usava o concat para fazer isso agora usamos o spread

//let pessoas1 =['Roberto', 'Ricardo', 'Raphael']
//let pessoas2 = ['Dudu', 'Arlindo', 'Sousa']

//pessoas1 = pessoas1.concat(pessoas2)

//usando o spread no array

//pessoas1 = [...pessoas1, ...pessoas2]
//console.log(pessoas1)


/* clonar objeto */

let pessoa1 = {nome: 'Roberto', idade: 33}
let pessoa2 = {nome: 'Juares', idade: 23}

const clonarobjeto = {...pessoa1}

console.log(clonarobjeto)