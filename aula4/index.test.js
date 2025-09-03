import {soma, subtracao, divisao, multiplicacao} from "./index.js";


console.log("teste da função soma()");

if (soma( 2, 2) === 4 ) console.log("passou 1º")
    else console.log("falhou 1º"); 

if (soma(-1, 2) === 1) console.log("passou 2º!")
    else console.log ("falhou 2º");

if (soma(2, 0) === 2) console.log("passou 3º!")
    else console.log ("falhou 3º");


console.log("teste da função subtração()");

if (subtracao (2 , 2) === 0) console.log("passou 4º!")
    else console.log ("falhou 4º");

if (subtracao (-2 , 2) === -4) console.log("passou 5º!")
    else console.log ("falhou 5º");

if (subtracao (-2 , 0) === -2) console.log("passou 6º!")
    else console.log ("falhou 6º");

console.log("teste da função multiplicação()");

if (multiplicacao (4 , 2) === 8) console.log("passou 7º!")
    else console.log ("falhou 7º");

if (multiplicacao (-2 , 2) === -4) console.log("passou 8º!")
    else console.log ("falhou 8º");

if (multiplicacao (-2 , 0) === 0) console.log("passou 9º!")
    else console.log ("falhou 9º");

if (multiplicacao (-2, -2) === 4) console.log("passou 10º!")
    else console.log ("falhou 10º");

console.log("teste da função divisão()");

if (divisao (4 , 2) === 2) console.log("passou 11º!")
    else console.log ("falhou 11º");

if (divisao (4 , -2) === -2) console.log("passou 12º!")
    else console.log ("falhou 12º");

if (divisao (4, 0) === undefined) console.log("passou 13º!")
    else console.log ("falhou 13º");

