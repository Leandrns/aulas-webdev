const btnCriar = document.querySelector('#btnCriar');
const listaFilmes = document.querySelector('#listaFilmes');
const inputFilme = document.querySelector('#inputFilme');
const inputAno = document.querySelector('#inputAno');
const inputDiretor = document.querySelector('#inputDiretor');

const filmes = [
    {
        nome: "Vingadores Ultimato",
        ano: 2019,
        diretor: "Anthony Russo, Joe Russo"
    },
];

renderizarNaTela();

btnCriar.addEventListener('click', (event) => {
    event.preventDefault();
    criarFilme();
});

function criarFilme() {
    const novoFilme = {
        nome: inputFilme.value,
        ano: inputAno.value,
        diretor: inputDiretor.value
    };
    filmes.unshift(novoFilme);
    renderizarNaTela();
};

function renderizarNaTela() {
    listaFilmes.innerHTML = "";
    filmes.forEach(filme => {
        const novoFilme = document.createElement('li');
        novoFilme.innerHTML = `
            <h1>${filme.nome}</h1>
            <p>${filme.ano}</p>
            <h3>${filme.diretor}</h3>
            <button onclick="editarFilme(${filmes.indexOf(filme)})">Editar</button>
            <button onclick="apagarFilme(${filmes.indexOf(filme)})">Apagar</button>`;
        listaFilmes.appendChild(novoFilme);
    });};

function editarFilme(idFilme) {
    const novoNome = prompt("Digite o novo nome:", filmes[idFilme]);
    filmes[idFilme].nome = novoNome;

    const novoAno = prompt("Digite o novo ano:", filmes[idFilme]);
    filmes[idFilme].ano = novoAno;

    const novoDiretor = prompt("Digite o novo diretor:", filmes[idFilme]);
    filmes[idFilme].diretor = novoDiretor;

    renderizarNaTela();
}

function apagarFilme(idFilme) {
    filmes.splice(idFilme, 1);
    renderizarNaTela();
}
