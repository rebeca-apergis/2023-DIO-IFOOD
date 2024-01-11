// Variaveis!

// O javascript é sensitivo a case. E é fracamente tipado. A linguagem irá tentar converter os valores das variaveis de acordo com o que voce está tentando fazer com elas.

// Não é necessário declarar o tipo de variavel no javascript.
/*
var var1 = 10;
var var2 = 'text';


console.log(var1 + var2);

var2 = 5;
console.log(var1 + var2);
 */

// Hoisting!

// Içamento, fundamental em var, let, e const. A ordem de declaração importa. Funções são içadas primeiro.
/*
teste();
function teste(){
    console.log('test');
}

// o javascript irá ler as funções, então até quando as funções são declaradas após serem chamadas, elas são içadas para o começo do código por natureza.
var teste1 = 'texte';
console.log(teste1);
*/
// Escopos e diferenças entre Var, Let, e Const:

// o var vaza escopos por conta do hoisting, exceto escopo de funções.

if (true) { var var1 = 10;}
console.log(var1);

function teste(){ var var2 = 20; 
return var2;}
console.log(teste());

/* a diferença dentre var, let, e const. O let é igual a uma variavel, mas ele mesmo se restringe ao escopo do bloco, e não passa pelo escopo global. O const é como o let mas é uma constante, 
seu valor inicial nunca muda.*/

// nomes de variaveis: começa com letra, dollar, ou underline. underline restringe uma variavel a um escopo, e é iniciada com letras minuscular. Classes e funções construtoras começam com letras maiusculas. constantes ficam em uppercase, e palavras compostas recebem camel-case.

// Tipos de dados, wrappers, coerção de tipos, booelan, null, e undefined.


