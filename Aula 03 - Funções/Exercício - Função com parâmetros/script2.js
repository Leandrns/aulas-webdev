function soma(a, b) {
    let resultado = document.querySelector('section#resultado');
    let r = a+b;
    return resultado.innerHTML = `<p>${r}</p>`;
}
function subt(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}