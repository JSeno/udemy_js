/* Não podemos criar variável com palavra reservada
* como let if, let else
* Não podemos iniciar uma variável com número
* Não podemos iniciar uma variável com caractere especial
* Não podemos iniciar uma variável com espaço
* utilize o underscore para separar palavras
* procure usar camelCase ao declarar variáveis: nomeCompletoDoUsuario
* variáveis são case sensitive nomecliente != NomeCliente
* não podemos redeclarar variáveis com let
* não utilize var utilize let
*/

// let nome = 'João';

// console.log(nome,'nasceu em 1984');
// console.log('Em 2000', nome, 'conheceu Maria');
// console.log(nome,'casou-se com Maria em 2012');
// console.log('Maria teve um filho com', nome, 'em 2015');
// console.log('O filho de', nome, 'se chama Eduardo');


let nome; //Declaração de variável
nome = 'João'; // Inicialização de variável
console.log(nome);
nome = 'Maria'; // Aqui alteramos o valor da variável
console.log(nome);