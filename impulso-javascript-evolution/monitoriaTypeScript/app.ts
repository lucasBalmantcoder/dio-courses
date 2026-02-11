let button = document.getElementById("button") as HTMLButtonElement | null;
let input1 = document.getElementById("input1") as HTMLInputElement | null;
let input2 = document.getElementById("input2") as HTMLInputElement | null;

function somarNumeros(numero1: number, numero2: number) {
    return numero1 + numero2;
}

button?.addEventListener("click", () => {
    if (input1 && input2) {
        const valor1 = Number(input1.value);
        const valor2 = Number(input2.value);

        console.log(somarNumeros(valor1, valor2));
    }
});
