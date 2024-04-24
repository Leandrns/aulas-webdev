// IF e ELSE
var a = 10;
var b = 20;

if (a > b)
    console.log('A é maior que B');
else
    console.log('B é maior que A');
// se houver apenas uma linha de código, não é necessário usar chaves

// SWITCH CASE
var c = 2;
var d = 5;
var opcao = 3;
var resultado = 0;

switch (opcao)
{
    case 1: 
        resultado = c + d;
        console.log('Soma: ' + resultado);
        break;
    case 2:
        resultado = c - d;
        console.log('Subtração: ' + resultado);
        break;
    case 3:
        resultado = c * d;
        console.log('Multiplicação: ' + resultado);
        break;
    case 4:
        resultado = c / d;
        console.log('Divisão: '+ resultado);
        break;
    default:
        console.log('Opção inválida');
}