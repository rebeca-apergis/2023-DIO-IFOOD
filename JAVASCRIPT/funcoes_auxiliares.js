/*Importação: como organizar o seu código

- distribuição de responsabilidade
- encapsualização

get: 

print: imprime tall como o console.log

function gets(){return 10;}
function print(texto){console.log(texto);}

module.exports = {gets, print};

====================================*/

const entradas = [5,50,111,98,23,20,56,99,87,11,54,69];
let i = 0;

function print(texto){console.log(texto);}

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

module.exports = {gets,print};