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
/* 
if (true) { var var1 = 10;}
console.log(var1);

function teste(){ var var2 = 20; 
return var2;}
console.log(teste());
*/
/* a diferença dentre var, let, e const. O let é igual a uma variavel, mas ele mesmo se restringe ao escopo do bloco, e não passa pelo escopo global. O const é como o let mas é uma constante, 
seu valor inicial nunca muda.*/

// nomes de variaveis: começa com letra, dollar, ou underline. underline restringe uma variavel a um escopo, e é iniciada com letras minuscular. Classes e funções construtoras começam com letras maiusculas. constantes ficam em uppercase, e palavras compostas recebem camel-case.

// Tipos de dados, wrappers, coerção de tipos, booelan, null, e undefined.

// PROTOTYPE - HERENÇA, POLIMORFISMO.

// ORIENTAÇÃO A PROTOTIPO:
/*const pessoa = { nome: 'renan', idade: 30, sexo: 'masculino'}
const renato = {nome: 'renato', idade: 24, __proto__: pessoa}

console.log(renato.sexo);

// herança. Orientação a prototipo é um objeto baseado em outro.

// Classe. Funções construtoras.
//função construtora tem a letra inicial maiuscula. ela tem um escopo próprio que usa o this.

class Pessoas {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    falar(){console.log(`Meu nome é:' ${this.nome}`)}
}


// SOBRESCRITA E SHADOWING

//pessoa.__proto__
// const renan = Object.create(pessoa)
//renan.nome = 'Renan'

// todos os objetos no javascript tem prototipos.

*/

// Operador NEW:  
/* 
class Pessoa {
    constructor(idade,nome) {
        this.nome = nome
        this.idade = idade
    }
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`);
}

const rebeca = new Pessoa['Rebeca',24]
rebeca.falar()
*/

// FIRST CLASS FUNCTIONS

// funções podem ser atribuidas a variaveis, elas podem ter nome ou não.
// É possivel passar uma função para outra função.
// função é objeto e seu nome é meramente ilustrativo.

// HIGHER ORDER FUNCTIONS
// function expression, function declaration.
/*
function nomeDaFuncao(){}

const var1 = function outraFuncao(){
    console.log('texto');
}

// declaração explicita e arrow function

const funcao2 = ()=>{
    console.log('a diferença é: sintaxe reduzida, não possui this, assim não possuindo contexto')
}

// closures ou fechamentos:

// funções se lembram no contexto de onde foram declaradas.

function soma(x) {
    return function (y) {
        return x + y;
    }
}

const somaParcial = soma(10)

console.log(somaParcial(20));

// invocação direta, call, apply e operador new:

gritar.apply(pessoa,['olllaaaaa',12]) // aplicação direta, pode as vezes retornar undefined, prestar atenção.
gritar.call(pessoa, 'olaaaaa', 14) // passa parametros
new Classe objeto 

 */

//CALLBACKS:

// É POSSIVEL CONCATENAR VALOR FUNÇÃO E VALOR, DENTRO DE OUTRA FUNÇÃO E TER O RESULTADO... BEM UTIL.

// MANIPULAÇÃO DE LISTAS: FOREACH, FILTER, MAP, REDUCE, JOIN, E COMBINAÇÃO DE FUNÇÕES DE MAIPULAÇÃO.

// FOREACH: 
/*
const lista = [0,2,4,6,8,10,12,14,16,18,20]

lista.forEach((value, i, listRef) =>{
    console.log(value,i,listRef)
})

//foreach é mais lento q o for convencional. é um for reduzido.

//Filter:

lista.filter((element, i, listREF) =>{
    return (element % 2 === 0)
})

// filter devolve uma lista nova. ele não muda a lista anterior. ele recebe uma função que retorna um boolean e se for true ele pega o elemento da lista referente.

// map: converte listas e os elementos dentro delas.

lista.map(
    (element) => {
        return element.nome;
    }
)

// REDUCE: Percorrer a lista toda e transformar ela em um unico valor. é matematico.

lista.reduce((previous,current) =>{
    return previous + current
},0)

// Join e combinação de manipulação: 

const lista2 = [{nome: 'renan'},{nome: 'rebeca'},{nome: 'felipe'},{nome: 'daniel'}]

console.log(
    lista2.map(e => e.nome)
    .filter{(e) => e.startsWith('R')}
    .join('; ')
);

 */

//e existem muitas outras funções...

