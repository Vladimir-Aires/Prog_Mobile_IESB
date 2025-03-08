let num = 5;

function recebedor(n){
    let dobro = 2 * n;
    let triplo = 3 * n;
    let quadrado = n*n;

    return(
        `Dobro de ${n}: ${dobro} \nTriplo de ${n}: ${triplo} \nQuadrado de ${n}: ${quadrado}`
    )
}

console.log(recebedor(num))