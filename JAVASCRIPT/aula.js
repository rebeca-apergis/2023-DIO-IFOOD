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

Exercicio: incremento do calculo do valor da viagem:

const gasosaLitro = 5.63;
const dieselLitro = 5.94;
const dieselPorKm = 10;
const gasosaPorKm = 10; 
let distanciaKm = 100;
const tipoCombustivel = 'Diesel';

let litrosGastosGas = distanciaKm / gasosaPorKm;
let precoTotalGas = litrosGastosGas * gasosaLitro;
let litrosGastosDis = distanciaKm / dieselPorKm;
let precoTotalDis = litrosGastosDis * dieselLitro; 

if (tipoCombustivel === 'Diesel') {
    console.log(precoTotalDis.toFixed(2));
    console.log('O combustivel é Diesel.');
} else {
    console.log(precoTotalGas.toFixed(2));
    console.log('O combustivel é Gasonlina.');
}

==========================================

Exercicio: média de notas! 

Média: 1 + 2 + 3 / 3;
 < 5 = reprovado
 => 5 & <= 7] = recuperação
 > 7 = aprovado 

 console.log('MÉDIA DE NOTAS ESTUDANTIL DO SEMESTRE:');

 let nota1 = 7;
 let nota2 = 9;
 let nota3 = 9;
 let mediaFinal = (nota1 + nota2 + nota3) / 3;

 console.log(mediaFinal.toFixed(2));

 if (mediaFinal < 5) {
    console.log('Voce está reprovado pela sua média.')
 } else if (mediaFinal >= 5 && mediaFinal <= 7){
    console.log('Voce está de recuperação pela sua média.');
 } else if (mediaFinal > 7) {
    console.log('Voce está aprovado para o próximo semestre!');
 }

==========================================

CALCULADORA DE IMC:

- Abaixo de 18.5 = abaixo do peso;
- Entre 18.5 e 25 = peso normal;
- Entre 25 e 30 = acima do peso;
- Entre 30 e 40 = obeso;
- Acima de 40 = Obesidade grave; */

let altura = 1.70;
let pesoKg = 120;
let imc = pesoKg / (altura * altura);

if (imc <= 18.5) {
    console.log('Voce está abaixo do seu peso ideal.');
} else if (imc >= 18.6 && imc <= 25) {
    console.log('Voce está no seu peso ideal.');
} else if (imc > 25 && imc <= 30) {
    console.log('Voce está acima do seu peso ideal.');
} else if (imc > 30 && imc <= 40){
    console.log('Voce está obeso');
} else if (imc > 40){
    console.log('Voce está em obesidade morbida.');
}

console.log(imc.toFixed(2));