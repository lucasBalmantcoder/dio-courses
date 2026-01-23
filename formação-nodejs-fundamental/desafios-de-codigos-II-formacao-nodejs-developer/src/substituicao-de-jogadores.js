const jogadores = [];

// Lê os 5 jogadores
for (let i = 0; i < 5; i++) {
    jogadores.push(gets());
}

// Lê a posição do jogador a ser substituído
const index = parseInt(gets());

// Lê o novo jogador
const novoJogador = gets();

// Substitui (posição começa em 1)
jogadores[index - 1] = novoJogador;

// Imprime no formato esperado
for (let i = 0; i < jogadores.length; i++) {
    print(`${i + 1}. ${jogadores[i]}`);
}
