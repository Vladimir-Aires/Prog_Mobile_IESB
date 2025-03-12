import { divisao,multiplicacao,soma,subtracao } from "./calculadora.js";
import moment from 'moment';

console.log(`Soma :${soma(10,5)} \nSubtração: ${subtracao(10,5)} \nMultiplicação: ${multiplicacao(10,5)} \nDivisão: ${divisao(10,5)}`)


function calcularIdade(anoNascimento){
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;

}

const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(`IDADE: ${idade} anos`) 

