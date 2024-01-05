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


