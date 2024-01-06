/*console.log('Olá Mundo.');  Introdutória. Nota: é necessário salvar arquivo para ele atualizar no terminal.

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
- Acima de 40 = Obesidade grave; 

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

==========================================

VALOR DE UM PRODUTO E O QUE DEVE SER PAGO.
- a vista débito recebe 10% de desconto;
- a vista dinheiro ou pix recebe 15% de desconto;
- em duas vezes, preço normal da etiqueta sem juros;
- acima de duas vezes, preço normal da etiqueta + 10% de juros;

calcular o valor total do produto.



const precoBase = 100;
let pixDin15 = precoBase - (precoBase * 0.15);
let deb10 = precoBase - (precoBase * 0.10);
let credParce2 = precoBase;
let credParceMais = precoBase + (precoBase * 0.10);
let pagamento = 'Crédito 2+';


console.log('O metodo de pagamento selecionado foi:')
console.log(pagamento);
console.log('O valor final a ser pago será de:')

if (pagamento === 'Débito') {
    console.log(deb10.toFixed(2));
} else if (pagamento === 'Pix' || pagamento === 'Dinheiro' ) {
    console.log(pixDin15.toFixed(2));
} else if (pagamento === 'Crédito 2x') {
    console.log(credParce2.toFixed(2));
} else if (pagamento === 'Crédito 2+') {
    console.log(credParceMais.toFixed(2));
} else {
    console.log('Selecione uma forma de pagamento valida.');
}

==========================================

FUNÇÕES NO JAVASCRIPT: SÃO UM PEQUENO TRECHO DE CÓDIGO PARA SER UTILIZADO A QUALQUER MOMENTO, CHAMANDO-O.

Exemplos: */

/*function sayMyName(name){ declaração do nome da função e de uma variavel para ela.
    console.log('Your name is ' + name); concatenação de string mais variavel.
}

sayMyName('Rebeca'); Passando parametro para a variavel para girar a função.
sayMyName('Felipe');*/
/*
function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);


function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log( 'O valor final será de: R$' + incrementarJuros(100,10).toFixed(2));

==========================================

COMO ORGANIZAR FUNÇÕES: 

Sempre por o código dentro de uma função para organizar, chamada MAIN

É possivel concatenar funções distintas.

function main(){
    console.log('Esta é a função principal.');
}

main();


function calcularImc(peso,altura){
    return peso / Math.pow(altura, 2);
}


function classificarImc(imc){
    if (imc <= 18.5) {
        return 'Voce está abaixo do seu peso ideal.';
    } else if (imc >= 18.6 && imc <= 25) {
        return 'Voce está no seu peso ideal.';
    } else if (imc > 25 && imc <= 30) {
        return 'Voce está acima do seu peso ideal.';
    } else if (imc > 30 && imc <= 40){
        return 'Voce está obeso';
    } else if (imc > 40){
        return 'Voce está em obesidade morbida.';
    }
}

function main(){
    const peso = 110;
    const altura = 1.75;
    const imc = calcularImc(peso,altura);

    console.log(classificarImc(imc));  
}

main();

==========================================

Funções invocadas imediatamente: não é necessário invocalas.

console.log(main);

const main2 = main;

main = function(){
    console.log(1);
}

(function (){
    console.log('Voce é fofinho.');
})()
o nome da função não é declarado quando ela vai ser rodada uma vez só. organizar o código.

function escrevaMeuNome(nome){
    return 'Meu nome é: ' + nome;
}

function eDeMaior(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome('Rebeca') + ' E sou de maior.');
    } else {
        console.log(' E sou de menor.');
    }
}

eDeMaior(24);

*/

/*const precoBase = 100;
let pixDin15 = precoBase - (precoBase * 0.15);
let deb10 = precoBase - (precoBase * 0.10);
let credParce2 = precoBase;
let credParceMais = precoBase + (precoBase * 0.10);
let pagamento = 'Crédito 2+';


console.log('O metodo de pagamento selecionado foi:')
console.log(pagamento);
console.log('O valor final a ser pago será de:')

if (pagamento === 'Débito') {
    console.log(deb10.toFixed(2));
} else if (pagamento === 'Pix' || pagamento === 'Dinheiro' ) {
    console.log(pixDin15.toFixed(2));
} else if (pagamento === 'Crédito 2x') {
    console.log(credParce2.toFixed(2));
} else if (pagamento === 'Crédito 2+') {
    console.log(credParceMais.toFixed(2));
} else {
    console.log('Selecione uma forma de pagamento valida.');
}


function precoFinal(formaPagamento,precoBase){
    if (formaPagamento === 1 ) { precoBase = precoBase - (precoBase * 0.10); }
    if (formaPagamento === 2 || formaPagamento === 3) { precoBase = precoBase - (precoBase * 0.15); }
    if (formaPagamento === 4 ) { precoBase = precoBase; }
    if (formaPagamento === 5 ) { precoBase = precoBase + (precoBase * 0.10); }
    return precoBase;
    
}

function pagamento(forma){
    if (forma === 1) { metodo = 'Débito'}
    if ((forma === 2) || (forma === 3)) { metodo = 'Dinheiro ou Pix.'}
    if (forma === 4) { metodo = 'Crédito em 2x.'}
    if (forma === 5) { metodo = 'Crédito em várias vezes.'}
    return metodo;
}
let metodoDePagamento = 1;

console.log('O preço final ficou em: R$' + precoFinal(metodoDePagamento,100).toFixed(2) + ', E o seu pagamento foi feito em ' + pagamento(metodoDePagamento));

==========================================

/* Objetos no javascript, literais. 

const vitor = {
    nome: 'Vitor J Guerra',
    idade:  25,
    altura: 1.70,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade} anos.` ); /*para referenciar valores é necessário usar acentos graves e não aspas...    
    }
};

const atributo ='idade'; - referenciando o atributo diretamente com seu nome.
console.log(vitor[atributo]);
vitor['idade'] = 35; - reatribuindo valores indiretamente para um atributo.
console.log(vitor[atributo]);

vitor.nome = 'Renan';
vitor.idade = 30;

vitor.descrever();

console.log(vitor.nome + ', tem ' + vitor.idade + ' anos de idade.');

É possivel incrementar objetos fora de seus escopois iniciais.

vitor.altura = 1.70;

vitor.sobrenome = 'Guerreiro';

delete vitor.sobrenome;

console.log(vitor); */

/* Funções dentro de objetos são chamadas de metodos.

==========================================

/* Como criar classes e instancias: elas são feitas para agrupar objetos similares para que possa ser evitada a repetição constante.
classe é uma definição de como um objeto deve ser, e instancia é uma ocorrencia daquele objeto.


class Pessoa {
    nome;
    idade;
    aniversario;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.aniversario = 2023 - idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade.`);
    }}



console.log(rebeca);
console.log(felipe);

rebeca.descrever();
felipe.descrever();

function compararPessoas (p1,p2){
    if (p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais novo(a) do que ${p2.nome}.`);
    } else if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }}

const rebeca = new Pessoa('Rebeca Apergis',24);
const felipe = new Pessoa('Felipe Pimentel de Almeida',24);

compararPessoas(rebeca,felipe);

==========================================

/*EXERCICIOS GUIADOS DE OBJETO E CLASSE. */

/*CARROS.

class Carros {
    marca;
    cor;
    litrosPorKm;

    constructor (marca,cor,litrosPorKm){
        this.marca = marca;
        this.cor = cor;
        this.litrosPorKm = litrosPorKm;
    }
    calcularGasto(distancia, precoCombustivel){
        return distancia * this.litrosPorKm * precoCombustivel;
    }}

const uno = new Carros('Uno','Roxo',1/12);
const palio = new Carros('Palio','Vermelho',1/10);

console.log(palio);

console.log(palio.calcularGasto(70,5));*/

/*EXERCICIOS GUIADOS DE OBJETO E CLASSE.*/

/*PESSOAS E IMC:

class Pessoas {
    nome;
    peso;
    altura

    constructor (nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){

        const imc = this.calcularImc();
        if (imc <= 18.5) {
            return 'Voce está abaixo do seu peso ideal.';
        } else if (imc >= 18.6 && imc <= 25) {
            return 'Voce está no seu peso ideal.';
        } else if (imc > 25 && imc <= 30) {
            return 'Voce está acima do seu peso ideal.';
        } else if (imc > 30 && imc <= 40){
            return 'Voce está obeso';
        } else if (imc > 40){
            return 'Voce está em obesidade morbida.';
        }
    }
}

const jose = new Pessoas('José',85,1.90);
console.log(jose.classificarImc());
console.log(jose);

==========================================

*/




