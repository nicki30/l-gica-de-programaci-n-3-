function factorialN(numero) {
    if (isNaN(numero)) {
        console.error("Alerta: El dato ingresado no es un número válido");
        return null;
    } 
// el factorial no puede ser negativo por lo tanto un ciclo 
    let resultado = 1;
    for (let i = numero; i >= 1; i--) {
        resultado *= i;
    }
    return resultado;
}

document.getElementById("calcularBtn").addEventListener("click", function() {
    let numeroIngresado;
    do {
        numeroIngresado = prompt("Ingrese un número:");
        numeroIngresado = parseFloat(numeroIngresado);
        if (isNaN(numeroIngresado)) {
            alert("Debe ingresar un número válido.");
        }
    } while (isNaN(numeroIngresado));

    const factorial = factorialN(numeroIngresado);
    if (factorial === null) {
        document.getElementById("Retorno").textContent = "Alerta: Hay un dato ingresado que no es un número válido";
    } else {
        document.getElementById("Retorno").textContent = `El factorial de ${numeroIngresado} es: ${factorial}`;
    }
});
