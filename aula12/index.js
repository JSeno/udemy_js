// Exercício transformar o valor de A em B, de B em C e de C em A.

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Solução 1
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

// Solução 2
[varA, varB, varC] = [varB, varC, varA];


console.log(varA, varB, varC);
