import { useState, useEffect } from "react";

function SmartCounter() {
    const [quantity, setQuantity] = useState(1);
    const [level, setLevel] = useState(0);

    useEffect(() => {
        if (quantity === 5) {
            setLevel((prev) => prev + 1);
        }
    }, [quantity]);

    return (
        <div>
            <h1>Quantity: {quantity}</h1>
            <h2>Level: {level}</h2>

            <button onClick={() => setQuantity((prev) => prev + 1)}>
                Aumentar
            </button>
        </div>
    );
}

export default SmartCounter;
