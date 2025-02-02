/* 
O if e else são estruturas condicionais em JavaScript (e na maioria das linguagens de programação) que permitem controlar o fluxo do programa com base em condições. Elas avaliam uma expressão e executam um bloco de código dependendo se a condição é verdadeira (true) ou falsa (false).
 */

// Estrutura Básica do if

if (condição) {
  // Código a ser executado se a condição for verdadeira
}

/* 
condição: Uma expressão que será avaliada como true ou false.
Se a condição for true, o bloco de código dentro do if é executado.
Se a condição for false, o bloco de código é ignorado.
*/

// Exemplo:

let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}

//Neste exemplo, como idade >= 18 é true, a mensagem "Você é maior de idade." será exibida no console.

//Estrutura do if com else
//O else é usado para definir um bloco de código que será executado quando a condição do if for falsa.

if (condição) {
  // Código a ser executado se a condição for verdadeira
} else {
  // Código a ser executado se a condição for falsa
}

// Exemplo:

let numIdade = 16;

if (numIdade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

//Neste caso, como idade >= 18 é false, a mensagem "Você é menor de idade." será exibida.

//Estrutura do if, else if e else
//Quando há múltiplas condições, você pode usar else if para verificar outras condições após o if inicial.

if (condição1) {
  // Código a ser executado se condição1 for verdadeira
} else if (condição2) {
  // Código a ser executado se condição2 for verdadeira
} else {
  // Código a ser executado se nenhuma das condições for verdadeira
}

let nota = 75;

if(nota >= 90){
  console.log("Aprovado com mérito!");
} else if (nota >= 60) {
  console.log("Aprovado.");
} else {
  console.log("Reprovado.");
}

/* 
Neste exemplo:

Se nota >= 90, exibe "Aprovado com mérito!".

Se nota >= 60, exibe "Aprovado.".

Caso contrário, exibe "Reprovado.".

Condições Aninhadas
Você pode aninhar if e else para criar lógicas mais complexas.
*/

