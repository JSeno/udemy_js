// Strings são indexadas em zero.

// let umaString = 'Um "Texto com aspas duplas"'; // Um "Texto com aspas duplas"
// let umaString = "Um \"Texto com aspas simples\""; // Um "Texto com aspas simples"
// let umaString = "Um Texto"; // Um Texto simples

// console.log(umaString[0]); // Mostra o caracter buscando pelo índice que no caso é 0.
// console.log(umaString.charAt(0)); // Outra forma de buscar o caracter pelo índice.

// let umaString = "Um Texto";
// console.log(umaString.concat(' ', 'em', ' ', 'um', ' ', 'lindo', ' ', 'dia')); // Concatenação
// console.log(umaString.concat(' em', ' um lindo dia')); // concatenação de strings
// console.log(umaString + ' em um lindo dia'); // concatenação
// console.log(`${umaString} em um lindo dia`); // Template String
// console.log(umaString.indexOf('Texto')); // Saber em qual índice se encontra a palavra 'Texto'
// console.log(umaString.lastIndexOf('o')); // Nesse caso ele faz a busca da última ocorrência da letra 'o'
// console.log(umaString.match(/[a-z]/g)); // Busca todas as letras minúsculas - g = global, busca todas as ocorrências/ TODO: Bom pesquisar expressões regulares
// console.log(umaString.search(/x/)); // Busca a primeira ocorrência da letra 'x'
// console.log(umaString.replace('Um', 'Outra')); // Substitui a palavra 'Um' por 'Outra'

let umaString ='O rato roeu a roupa do rei de roma.';
// console.log(umaString.replace(/r/g, '#')); // Substitui todas as ocorrências da letra 'r' por '#' - g = global, caso não utilize o g ele só irá substituir a primeira ocorrência
// console.log(umaString.length); // Mostra o tamanho da string
// console.log(umaString.slice(0, 10)); // Mostra a string de 0 a 10 o 0 é o índice inicial e 10 é o índice final
// console.log(umaString.length - 3);
// console.log(umaString.slice(-3)); // Mostra a string de -3 até o final
// console.log(umaString.slice(32)); // Mostra a string de 32 até o final
// console.log(umaString.slice(-5)); // Mostra a string de -5 até o final
// console.log(umaString.slice(-5, umaString.length -1 )); // Mostra a string de -5 até o final
// console.log(umaString.slice(-5, -1)); // Mostra a string de -5 até o final
// console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // Mostra a string de -5 até o final
// console.log(umaString.split(' ')); // Divide a string em um array
// console.log(umaString.split('r')); // Divide a string em um array e mostra apenas as ocorrências da letra 'r'
// console.log(umaString.split(' ', 2)); // Divide a string em um array e mostra somente 2 palavras
// console.log(umaString.toUpperCase()) // Mostra a string em letras maiúsculas
console.log(umaString.toLowerCase()) // Mostra a string em letras minúsculas


