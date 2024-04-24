// FOR
// for (início; condição; incremento)
// for (;;) - loop infinito

var vetor = ['João', 'Maria', 'Ana'];
for (i = 0; i < vetor.length; i++)
    console.log(vetor[i]);
    //mesma coisa do IF, se for apenas uma linha não precisa de chaves

// WHIILE
// while (condição)
// while (1) - loop infinito

var option = 'S';
i = 0;
while (option == 'S')
{
    console.log('option == s não saiu daqui');
    if (i >= 10)
        option = 'N';
    i++;
}