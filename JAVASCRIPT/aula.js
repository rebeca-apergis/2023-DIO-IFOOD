console.log('Olá Mundo.'); /* Introdutória. Nota: é necessário salvar arquivo para ele atualizar no terminal.

Declaração de variaveis: 

let variavel = 10 + 10; é possivel mudar. (=) atribuição. ( + - * /) operadores matematicos.
const pi = 3.14; não é possivel mudar.


console.log(variavel);

DESAFIO!

Faça um programa para calcular o valor de uma viagem:
- O preço do combustivel;
- O gasto médio do combustivel por km
- a distancia em KM da viagem.

Imprima o valor que será gasto no processo.*/

/*
const gasosaLitro = 5.63; camel case
const gasosaPorKm = 12; 
let distanciaKm = 500;

let litrosGastos = distanciaKm / gasosaPorKm;
let precoTotal = litrosGastos * gasosaLitro;

console.log(precoTotal.toFixed(2)); */

/*==========================================*/

/*Estruturas condicionais: Variaveis booleanas, verdadeiro ou falso.

const camisetaAzul = true; - boolean absoluto.
const camisetaAmarela = false;

10>=5 retorna true.

Resto de divisão: 

const numero = 11;
const numeroResto = numero % 2;
const eNumeroPar = (numero % 2) === 0;
console.log(numeroResto);
console.log(eNumeroPar);

==========================================

(===) igualdade numerologico.
(==) igualdade que ignora o tipo. Converte os tipos para comparar se é o mesmo valor.
(=) atribuição

const numero = 10;
const numeroResto = numero % 2;
const eNumeroPar = (numero % 2) === 0;
console.log(numeroResto);

if (eNumeroPar) {
   console.log(eNumeroPar);
   console.log('O numero é par.');
} else {
    console.log('teste de else.');
}

if (!eNumeroPar) {
    console.log(eNumeroPar);
    console.log('O numero é impar.');
 }

==========================================
 
const numero = 0;
const numeroResto = numero % 2;
const eNumeroPar = (numero % 2) === 0;


if (numero === 0) {
    console.log('o numero é invalido');
 } else if (!eNumeroPar) {
    console.log(numero);
    console.log(eNumeroPar);
    console.log('O numero é impar.');
} else {
    console.log(numero);
    console.log(eNumeroPar);
    console.log('O numero é par.');
}

==========================================
 
Revisão e dicas de boas praticas:
- variaveis booleanas, true e falso.
- condições if else.
- constantes e variaveis.
- focar na clareza dos nomes da variaveis.
- tentar nomear variaveis booleanas com 'is' e 'eh'.

==========================================

Exercicio: incremento do calculo do valor da viagem:*/

const gasosaLitro = 5.63;
const dieselLitro = 5.94;
const dieselPorKm = 15;
const gasosaPorKm = 10; 
let distanciaKm = 100;

let litrosGastosGas = distanciaKm / gasosaPorKm;
let precoTotalGas = litrosGastosGas * gasosaLitro;
let litrosGastosDis = distanciaKm / dieselPorKm;
let precoTotalDis = litrosGastosDis * dieselLitro; 


console.log(precoTotalGas.toFixed(2));

console.log(precoTotalDis.toFixed(2));
