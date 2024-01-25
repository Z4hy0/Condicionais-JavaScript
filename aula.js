
/*
    Boolean é True ou False
*/
const camisaFranAzul = true;
const camisaFranVerde = false;


/*
    Condicionais para ver se uma situação é verdadeira ou falsa
*/

/* 
    Código para mostrar se o numero é Par
*/
console.log('O número é divisível por 5?')
const numero = 0;

const NumeroDivisivelPor5 = numero % 5 === 0;

if (numero === 0){
    console.log('Número inválido!')
}
else if (NumeroDivisivelPor5){
    console.log('Sim');
}else{
    console.log('Não')
}
