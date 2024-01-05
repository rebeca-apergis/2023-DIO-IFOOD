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
*/

function precoFinal(formaPagamento,precoBase){
    if (formaPagamento === 1 ) { precoBase = precoBase - (precoBase * 0.10); }
    if (formaPagamento === 2 || formaPagamento === 3) { precoBase = precoBase - (precoBase * 0.15); }
    if (formaPagamento === 4 ) { precoBase = precoBase; }
    if (formaPagamento === 5 ) { precoBase = precoBase + (precoBase * 0.10); }
    return precoBase;
    
}

function pagamento(forma){
    if (forma = 1) { forma = 'Débito'}
    if ((forma = 2) || (forma = 3)) { forma = 'Dinheiro ou Pix.'}
    if (forma = 4) { forma = 'Crédito em 2x.'}
    if (forma = 1) { forma = 'Crédito em várias vezes.'}
    return forma;
}

console.log('O preço final ficou em: R$' + precoFinal(5,100).toFixed(2));
console.log('E o seu pagamento foi feito em ' + pagamento(5));

