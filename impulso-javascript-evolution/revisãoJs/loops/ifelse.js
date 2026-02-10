const numero = Number(process.argv[2]);

if (Number.isNaN(numero)) {
    console.log("Informe um número válido");
} else if (numero > 0) {
    console.log("Positivo");
} else if (numero === 0) {
    console.log("Zero");
} else {
    console.log("Negativo");
}
