var n1 = document.getElementById('n1'); // o que está entre () se refere ao id no HTML
var n2 = document.getElementById('n2');
var r = document.getElementById('r');

function soma(){
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    if (isNaN(resultado))
        r.textContent = "Nenhum valor foi digitado."
    else
        r.textContent = resultado;
}
function subtracao(){
    var resultado = n1.valueAsNumber - n2.valueAsNumber;
    if (isNaN(resultado))
        r.textContent = "Nenhum valor foi digitado."
    else
        r.textContent = resultado;
}
function multiplicacao(){
    var resultado = n1.valueAsNumber * n2.valueAsNumber;
    if (isNaN(resultado))
        r.textContent = "Nenhum valor foi digitado."
    else
        r.textContent = resultado;
}
function divisao(){
    var resultado = n1.valueAsNumber / n2.valueAsNumber;
    if (isNaN(resultado))
        r.textContent = "Nenhum valor foi digitado."
    else
        r.textContent = resultado;
}

