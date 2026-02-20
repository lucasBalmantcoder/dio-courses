import React, { useState, useEffect } from "react";
import "../IfoodCounter/IfoodCounter.css";

export default function IfoodCounter() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.getElementById("moeda").innerHTML = value * 12;
        // alert("Componte Montado");
    }, [value]);

    function down() {
        if (value > 0) {
            setValue((prev) => prev - 1);
        }
    }

    function up() {
        setValue((prev) => prev + 1);
    }

    const minusButtonClass =
        value <= 0
            ? "counter-button-minus-desactive"
            : "counter-button-minus-active";

    return (
        <div className="countex-wrapper">
            <button
                className={minusButtonClass}
                onClick={down}
                disabled={value <= 0}
            >
                -
            </button>

            <p>{value}</p>

            <button className="counter-button-plus-active" onClick={up}>
                +
            </button>
            <button id="moeda">12,00</button>
        </div>
    );
}
