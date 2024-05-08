function soma(a, b) {
    return a + b;
}
function subt(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero.";
    }
    return a / b;
}

function calculadora() {
    let resultado = document.getElementById('resultado');
    let funcao = document.getElementById('funcao_usada');
    resultado.innerHTML = null;
    funcao.innerHTML = null;
    let repetir;
    
    while (repetir != 'não') {
        let n1 = Number(prompt("Primeiro número:"));
        let n2 = Number(prompt("Segundo número:"));
        let operacao = prompt(`Valores informados: ${n1} e ${n2} \n[+] Somar \n[-] Subtrair \n[*] Multiplicar \n[/] Dividir`);
        
        switch (operacao) {
            case '+':
                resultado.innerHTML += `<p>${n1} + ${n2} = ${soma(n1, n2)}</p>`;
                // funcao.innerHTML += "<p>Função soma(a, b) com return a + b</p>";
                break;
            case '-':
                resultado.innerHTML += `<p>${n1} - ${n2} = ${subt(n1, n2)}</p>`;
                // funcao.innerHTML += "<p>Função subt(a, b) com return a - b</p>";
                break;
            case '*':
                resultado.innerHTML += `<p>${n1} * ${n2} = ${mult(n1, n2)}</p>`;
                // funcao.innerHTML += "<p>Função mult(a, b) com return a * b</p>";
                break;
            case '/':
                resultado.innerHTML += `<p>${n1} / ${n2} = ${div(n1, n2)}</p>`;
                // funcao.innerHTML += "<p>Função div(a, b) com return a / b</p>";
                break;
        }
        repetir = prompt("Deseja realizar outra operação? [sim] [não]");
        if (repetir == 'não') {
            break;
        }
    }
}