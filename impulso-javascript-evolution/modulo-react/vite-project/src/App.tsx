import "./App.css";
import Button from "./Button"; // Importe o componente que você criou

const element = "Digital Innovation";
const element2 = <h1>Olá Turma - {element}</h1>;

function App() {
    // Adicione os tipos (: number) para remover o erro vermelho
    const soma = (a: number, b: number) => {
        alert(a + b);
    };

    return (
        <div className="App">
            {element2}
            <p>Hello World</p>

            {/* Use o seu componente personalizado aqui */}
            <Button label="Clique aqui para somar" onClick={() => soma(1, 2)} />
        </div>
    );
}

export default App;
