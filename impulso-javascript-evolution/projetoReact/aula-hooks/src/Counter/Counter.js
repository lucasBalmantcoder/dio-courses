import React from "react";

function Counter() {
    let quantity = 10;

    function upQuantity() {
        quantity += 1;
        document.getElementById("counter").innerHTML = quantity;
        console.log(quantity);
    }
    return (
        <div>
            {/* Conteúdo do seu contador */}
            <h1 id="counter">{quantity}</h1>
            <button onClick={upQuantity}>Incrementar</button>
        </div>
    );
}

export default Counter; // Verifique se esta linha existe
