//JSON = JavaScript object Notation
//um formato de representação de dados
//mais simples que XMLDocument, que é utilizado para fins parecidos
//Utiliza o formato de chave e valor
//é leve para ser enviado por requisições
//Muito utilizado para API e também arquivos de configuração

//o JSON aceita diversos tipos de dados

//strings - "Ola Mundo";
//Números - 1 ou 12.54;
//Arrays - [1,2,3];
//Objeto - {"nome": "Matheus"};
//dados nulos - null;

const Obj = [
    {
        nome: "Matheus",
        Idade: 30,
        Estar_trabalhando: true,
        detalhes_profissão:{
            profissão: "Programador",
            empresa: "Empresa X"
        },
        Hobbies :["programador", "Correr", "Ler"],
    },
    {
        nome: "Paulço",
        Idade: 35,
        Estar_trabalhando: false,
        detalhes_profissão:{
            profissão: null,
            empresa:null
        },
        Hobbies :["Jogar", "Caminhar"],
    },
]

//json
//convertendo objeto para json

const jsonData = JSON.stringify(Obj)

console.log(jsonData)

//converter de json para objeto 

const objData = JSON.parse(jsonData)

console.log(objData)