/*
Em JavaScript, não há uma nomenclatura padrão única obrigatória, mas existem convenções amplamente adotadas pela comunidade para tornar o código mais legível e consistente. Aqui estão as principais convenções de nomenclatura de variáveis em JavaScript:
*/

// Nomes de Variáveis:
// 1. camelCase
/*
A convenção mais comum para nomear variáveis e funções.

A primeira palavra começa com letra minúscula, e as palavras subsequentes começam com letra maiúscula.

Exemplo:
*/

let nomeCompleto = "João Silva";
let idadeDoUsuario = 25;

// 2. PascalCase
/* 
Usada principalmente para nomear classes ou construtores.

A primeira letra de cada palavra é maiúscula.

Exemplo:
*/

class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

// 3. snake_case
/*
Menos comum em JavaScript, mas ainda pode ser usada em alguns contextos.

As palavras são separadas por sublinhados (_).

Exemplo:
*/

let nome_completo = "Maria Souza";
let idade_usuario = 30;

// 4. UPPER_CASE_SNAKE_CASE
/* 
Usada para constantes ou valores que não mudam durante a execução do programa.

As palavras são escritas em letras maiúsculas e separadas por sublinhados.

Exemplo:
*/

const PI = 3.14159;
const MAX_USUARIOS = 100;

// 5. kebab-case
/*
Raramente usada em JavaScript para variáveis, mas comum em nomes de arquivos ou atributos HTML/CSS.

As palavras são separadas por hífens (-).

Exemplo (não recomendado para variáveis em JS):
*/

// Não recomendado para variáveis em JS
let nome-completo = "Carlos Oliveira"; // Isso causaria erro de sintaxe

// Boas práticas:

/*
Nomes descritivos: Escolha nomes que descrevam claramente o propósito da variável.

Evite abreviações obscuras: Prefira numeroDeUsuarios em vez de numUsrs.

Consistência: Mantenha o mesmo padrão de nomenclatura em todo o código.

Evite palavras reservadas: Não use palavras reservadas do JavaScript, como let, class, function, etc.

Exemplos:
*/

let contador = 0; // camelCase
const TAXA_DE_JUROS = 0.05; // UPPER_CASE_SNAKE_CASE
class Animal { // PascalCase
  constructor(nome) {
    this.nome = nome;
  }
}