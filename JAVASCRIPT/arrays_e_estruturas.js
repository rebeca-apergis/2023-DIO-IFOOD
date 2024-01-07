/*O QUE É UM ARRAY? (LISTAS)

const alunos = ['João', 'Vitor','Marina'];

console.log(alunos);
console.log(alunos[2]);

alunos.push('Renan');
alunos[4] = 'Barbara';
alunos.push(15);

console.log(alunos);

console.log(alunos.pop());
console.log(alunos);


const nome = 'Rebeca Apergis';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);    
} 


const notas = [];

notas.push(6);
notas.push(9);
notas.push(10);
notas.push(3);
notas.push(5);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;    
}

const media = soma / notas.length;
console.log(media.toFixed(2));

Depuração de javascript:  ctrl + shift + d... Breakpoints e F10*/

/*let tabuadaDo = 9;

for (let i = 1; i <= 10; i++) {
    let vezesTabuada = tabuadaDo * i;
    console.log(tabuadaDo + 'x' + i + ': ' + vezesTabuada);
}

*/

/* Imprimindo pares.

const lista = [1,2,3,4,5,6,7,8,9,10,20,25,26,27,31,30];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0){
        console.log('O numero é par: ' + lista[i]);
    } else {console.log('O numero é impar: ' + lista[i]);}
}

console.log(lista);

*/