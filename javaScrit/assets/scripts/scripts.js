var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0; // Inicializa a variável com o valor inicial do contador

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
