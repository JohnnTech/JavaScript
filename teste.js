// let saudacao = "Olá";
// let nome = null;
// nome = prompt("Por favor, digite seu nome: ");



// let mensagem = `${saudacao} ${nome}`;


// //console.log(nome);

// console.log(`texto string linha 1
// texto string linha 2
// ${mensagem}`);

// function mostrarThis() {
//     console.log(this);
// }

// mostrarThis(); 

// let pessoa = {
//     nome: "Naruto",
//     idade: 25,
//     saudacao: function(){
//         return `Olá, meu nome é ${this.nome} e tenho ${this.idade}!`
//     }
// };

// console.log(pessoa.saudacao());

// function Animal(nome) {
//     this.nome = nome;
//   }
  
//   const cachorro = new Animal('Rex'); // A função construtora `Animal` não tem uma declaração "return"
//   console.log(cachorro.nome); // Saída: Rex

// let const = "Const"; // Isto vai gerar um erro

// var x = 10;
// let y = 20;

// if(true){
//     var x = 30;
//     let y = 40;
// }

// function soma(x, y){
//     return x + y;
// }
// console.log(x)
// console.log(y)
// console.log(`O resultado da soma de ${x} + ${y} é: ${soma(x, y)}!`);
// console.log("O resultado da soma de "+ x +" + "+ y + " " + "é: "+ soma(x,y)+"!");

// let _usuario = "Carlos '01'";
// let _usuario0 = 'Carlos "01"';
// let $saldo = 100;

// console.log(_usuario);
// console.log(_usuario0);
// // console.log($saldo);

// var largura = prompt('Digite a largura do terreno: ');
// var comprimento = prompt('Digite o comprimento do terreno: ');

// var area = calcularAreaTerreno(largura, comprimento);

// document.write('O terreno possui uma área de '+ area + ' metros quadrados');

// function calcularAreaTerreno (largura, comprimento){
//     let area = largura * comprimento;
//     return area;
// }

var num1 = parseInt(prompt('Digite o primeiro número: '));
var num2 = parseInt(prompt('Digite o segundo número: '));

var somar = somarNumeros(num1, num2);
document.write(`O resultado da soma entre ${num1} e ${num2} é: ${somar} \n `);
var subtrair = subtrairNumeros(num1, num2);
document.write(`O resultado da subtração entre ${num1} e ${num2} é: ${subtrair} \n `);

function somarNumeros (num1, num2){
    let soma = num1 + num2;
    return soma;
}
function subtrairNumeros (num1, num2){
    let soma = num1 - num2;
    return soma;
}