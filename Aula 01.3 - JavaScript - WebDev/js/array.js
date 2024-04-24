/* Arrays armazenam uma lista de valores, primitivos ou não. Valores tipo
array são definidos usando colchetes [].
Podemos adicionar elementos em um array existente com a função push, e obter
seu tamanho(quantidade de elementos) com a propriedade lenght */

var frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pera'];
//var frutas = [  0,       1,       2,       3]

console.log('---- FRUTAS ----');
console.log('-- Quantidade de Elementos em Frutas: ' + frutas.length);
console.log('-- Incluindo a Melancia no Array');
frutas.push('Melancia');
console.log('-- Nova quantidade de Elementos em Frutas: ' + frutas.length);
console.log('Itens armazenados em FRUTAS');
console.log(frutas);
// length -- quantidade de elementos no array

var veiculos = ['Onix', 'Cruze', 'Tracker', 'S10', 'Spin'];

console.log('----- VEÍCULOS -----');
console.log('Imprimindo um veículo de cada vez');
console.log(veiculos[0]);
console.log(veiculos[1]);
console.log(veiculos[2]);
console.log(veiculos[3]);
console.log(veiculos[4]);

console.log('-- ELEMENTOS NO ARRAY DE VEÍCULOS --');
console.log(veiculos.length);
console.log('-- Incluindo veículos no array');
veiculos.push('Cobalt');
console.log('-- ELEMENTOS NO ARRAY DE VEÍCULOS: ' + veiculos.length);

console.log('-- COMANDO DE REPETIÇÃO FOR --');

for (i = 0; i < veiculos.length; i++)
{
    console.log(veiculos[i]); 
}