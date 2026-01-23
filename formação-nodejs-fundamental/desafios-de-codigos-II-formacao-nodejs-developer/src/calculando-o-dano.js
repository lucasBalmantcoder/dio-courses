function calcularDano(ataque, defesa) {
  if (ataque - defesa <= 0) {
    return 0;
  }
  return ataque - defesa;
}


const ataque = parseFloat(gets());
const defesa = parseFloat(gets());

const danoCausado = calcularDano(ataque, defesa);
print("O dano causado pelo ataque foi: " + danoCausado);