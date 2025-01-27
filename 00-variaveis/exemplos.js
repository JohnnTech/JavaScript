/*
Em JavaScript, variáveis podem ser declaradas utilizando três palavras-chave: var, let e const. Abaixo, vamos ver alguns tipos de variáveis que você pode trabalhar, com exemplos de cada um:
*/

//Tipos de Variáveis
//Number: Para lidar com valores numéricos, incluindo inteiros e números de ponto flutuante.

let idade = 25;
let preco = 19.99;

//String: Sequência de caracteres, usada para texto.

let nome = "Maria";
let saudacao = 'Olá, mundo!';

// Boolean: Representa valores booleanos, verdadeiro (true) ou falso (false).

let isActive = true;
let isComplete = false;

// Object: Coleção de pares chave-valor, permite armazenar dados mais complexos.

let pessoa = {
    nome: "João",
    idade: 30,
    cumprimentar: function() {
        console.log("Olá!");
    }
};

// Array: Lista ordenada de valores, que pode conter múltiplos tipos de dados.

let frutas = ["maçã", "banana", "laranja"];
let numeros = [1, 2, 3];

// Null: Representa intencionalmente a ausência de valor.

let carro = null;

// Undefined: Variáveis que foram declaradas mas não possuem um valor atribuído.

let valor;
console.log(valor);  // undefined

// Symbol: Valores únicos que podem ser usados como identificadores para objetos.

let id = Symbol("id");

// Tipos de Declaração de Variáveis

//var: Usado na versão inicial do JavaScript. Tem escopo de função e pode ser redeclarado.

var x = 10;
var x = 20;  // permitido

// let: Introduzido no ECMAScript 6, tem escopo de bloco e não pode ser redeclarado no mesmo escopo.

let y = 30;
y = 40;  // permitido

// const: Também introduzido no ECMAScript 6, uma vez atribuído um valor, ele não pode ser modificado. Tem escopo de bloco.

const z = 50;
// z = 60;  // erro





