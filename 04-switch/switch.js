// Estrutura switch
/* 
A estrutura switch é usada para comparar uma expressão com múltiplos valores possíveis.Cada valor é um case, e o bloco de código associado ao case 
correspondente será executado.
*/

switch (expressão) {
    case valor1:
        // Bloco de código executado se expressão === valor1
        break;
    case valor2:
        // Bloco de código executado se expressão === valor2
        break;
    default:
    // Bloco de código executado se nenhum dos casos anteriores for verdadeiro
}

//Exemplo:

let diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}



