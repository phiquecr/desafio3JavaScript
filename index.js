// Declare as seguintes variáveis:
// -nome
// -idade
// -amigos

var nome = "Pedro Henrique"
var idade = "16"
var amigos = ["Victor Hugo", "João"]

// Mostre no console a seguinte frase:
// 	Olá meu nome é ..., tenho ... anos, e meus amigos são ...;

console.log(`Olá meu nome é ${nome}, tenho ${idade} anos, e meus amigos são ${amigos}`)

// Use um método para adicionar mais um amigo na sua lista;

amigos.unshift("Nicole")
console.log(amigos)

// Crie uma variável com o dia do seu aniversario, e retorne a frase:
//     O dia do meu aniversário é...;

var data = "19"
console.log(`O dia do meu aniversário é ${data}`);
        
// Crie uma array com suas comidas favoritas;

var comidas = ["Strogonoff", "Pizza", "Churrasco"]

// Retire a primeira comida e guarde em uma variável; 

comidas.shift()
console.log(comidas)

// Mostre sua lista organizada em ordem alfabética;

comidas.sort()
console.log(comidas)
    
// Crie um objeto `pessoa`, que receba as informações:
// - nome:
// - sobrenome:
// - humano:
// - idade:

var pessoa = {
    nome: "Pedro Henrique",
    sobrenome: "Costa",
    humano: true,
    idade: "16"
}

// Mostre no console a seguinte frase:
// "Olá meu nome é ....";

console.log(`Olá meu nome é ${pessoa.nome}`)