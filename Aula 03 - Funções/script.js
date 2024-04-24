let contador = 0;
let res = document.querySelector('section#cliques');

function contar() {
    contador ++;
    res.innerHTML = `<p>O contador está com ${contador} cliques.</p>`
}

function zerar() {
    contador = 0;
    res.innerHTML = `<p>O contador está com 0 cliques.</p>`;
}