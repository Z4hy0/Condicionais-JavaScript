/*
    Faça um programa para calcular o valor da sua viagem.

    Você terá 3 variáveis. Sendo elas:
    1 - preço do etanol;
    2 - preço da gasolina;
    3 - o tipo de combustível que está no seu carro;
    4 - gasto médio de combustível do carro em KM;
    5 - distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 3.50;
const precoGasolina = 4.90;
const tipoCombustivel = 'Gasolina';
const kmPorLitros = 10;
const distanciaEmKM = 100;

const LitrosConsumidos = distanciaEmKM / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = LitrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = LitrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


