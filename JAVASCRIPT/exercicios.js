
/*const funcoes = require('./funcoes_auxiliares.js');

console.log(funcoes.gets());

Object destructuring: */

/*const { gets, print} = require('./funcoes_auxiliares.js');

print(gets());

acuçar sintatico >:D


=========================================*/

const {gets,print} = require('./funcoes_auxiliares.js');

/*const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

print(numerosSorteados);

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor){maiorValor = numeroSorteado;}
}

print(maiorValor);*/

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {maiorValorEncontrado = numeroSorteado;}
    
}

print(maiorValorEncontrado);
