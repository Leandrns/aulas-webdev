var aluno1 = {
    ra: 12345,
    nome: 'Leandro Souza',
    curso: 'Engenharia de Software',
    ativo: true
};
console.log(aluno1.ra);
console.log(aluno1.nome);
console.log(aluno1.curso);
console.log(aluno1.ativo);

//É possível acrescentar um novo campo ao objeto:
aluno1.datanasc = '27/07/2005';
console.log(aluno1.datanasc);

//Também é possível deletar campos já existentes:
delete aluno1.ativo;

///EXERCÍCIO
var Torcedor = {
    nome: 'Corinthians',
    brasileiros: 7,
    libertadores: 1,
    rebaixamentos: 1
};

console.log(Torcedor.nome);
console.log(Torcedor.brasileiros);
console.log(Torcedor.libertadores);
console.log(Torcedor.rebaixamentos);

Torcedor.mundiais = 2;
console.log(Torcedor.mundiais);

delete Torcedor.rebaixamentos;