let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let resultado = document.querySelector('section#resultado');

function soma(a, b) {
    return resultado.innerHTML = `<p>O resultado é: ${a+b}</p>`
}
function subt(a, b) {
    return resultado.innerHTML = `<p>O resultado é: ${a-b}</p>`
}
function mult(a, b) {
    return resultado.innerHTML = `<p>O resultado é: ${a*b}</p>`
}
function div(a, b) {
    return resultado.innerHTML = `<p>O resultado é: ${a/b}</p>`
}