let num1 = 15;
let num2 = 5;

function comparador(a,b){
    let soma = a + b;
    let subtracao = a - b;
    let mult = a * b;
    let divisao = a / b;
    let maiorQue = a > b ? 'Sim' : 'Não';

    
    return(
        `Soma de ${a} e ${b}: ${soma} \nSubtração de ${a} e ${b}: ${subtracao} \nMultiplicação de ${a} e ${b}: ${mult} \nDivisão de ${a} e ${b}: ${divisao} \n${a} é maior que ${b}? : ${maiorQue}`
    )
}

console.log(comparador(num1,num2))