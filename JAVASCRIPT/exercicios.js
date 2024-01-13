
/*const funcoes = require('./funcoes_auxiliares.js');

console.log(funcoes.gets());

Object destructuring: */

/*const { gets, print} = require('./funcoes_auxiliares.js');

print(gets());

acuçar sintatico >:D


=========================================*/

//const {gets,print} = require('./funcoes_auxiliares.js');

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

print(maiorValor);
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {maiorValorEncontrado = numeroSorteado;}
    
}

print(maiorValorEncontrado);
=================================*/
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
    tipo;
    dano;
    resistencia;
    //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
   constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }
  
    calcularDano() {
      return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
  }
  
  // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
  const tipoItem = 'arma';
  const danoItem = 300;
  const resistenciaItem = 300;
  
  //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
  
  const itemPersonalizado = new ItemMagico(tipoItem,danoItem,resistenciaItem)
  
  // TODO: Imprima os atributos do item personalizado
  console.log("Tipo: " + itemPersonalizado.tipo);
  console.log("Dano: " + itemPersonalizado.dano);
  console.log("Resistencia: " + itemPersonalizado.resistencia);
  
  // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
  const danoTotal = itemPersonalizado.calcularDano();
  console.log("Dano em combate: " + danoTotal);