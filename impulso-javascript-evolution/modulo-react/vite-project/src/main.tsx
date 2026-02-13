import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// O erro ocorre se esta linha não encontrar o id="root"
const rootElement = document.getElementById("root");

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
} else {
    console.error("Não foi possível encontrar o elemento root no HTML.");
}
