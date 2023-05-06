//as funções assíncronas funcionam como promises, porém com uma sintaxe mais simples;
//precisamos declarar a função com a palavra async ;
//e quando precisamos aguarda por algo a instrução precisa de await;
//podemos aplicar o recurso em funções anônimas e métodos de classe;
//tentar usar o await sem o async gera um erro 
//exemplo de uso: inserção de dados no banco;

//sintaxe
/*function primeiraFuncao(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('esperou isso aqui')
            resolve()
        }, 4000)
    })
}

async function segundaFuncao(){
    console.log("iniciou")
    //se não tiver o await ele não espera
    await primeiraFuncao()
    console.log('Terminou')
}

segundaFuncao()*/
//pratico
function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`).then(data => data.json()).catch(err => err.json())
}

async function showUserName(id) {
    try{
        const user = await getUser(id)

        console.log(`O nome do meu usuário é: ${user.data.first_name}`)
    }catch(err){
        console.log(`Erro: ${err}`)
    }
}

showUserName(5)