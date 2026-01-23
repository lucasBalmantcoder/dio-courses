//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


// TODO: Crie uma Função 'VerificarAtributo' para verificar se o valor do atributo está dentro do intervalo especificado:

function verificar_atributo(atributo, valor_minimo, valor_maximo, valor_atual)
{
    if (valor_atual >= valor_minimo && valor_atual <= valor_maximo) return "O valor do atributo está dentro do intervalo especificado"
    else return "O valor do atributo está fora do intervalo especificado"
}


    // TODO: Implemente a função VerificarAtributo, para verifica se o valor do atributo está entre o mínimo e o máximo:


// Obtemos os valores do atributo, mínimo, máximo e valor do atributo através das entradas do usuário
const atributo = gets(); 
const valorMinimo = parseInt(gets()); 
const valorMaximo = parseInt(gets()); 
const valorAtributo = parseInt(gets()); 

// TODO: Verifique se o valor do atributo está dentro do intervalo especificado e imprima o resultado:

print(verificar_atributo(atributo, valorMinimo, valorMaximo, valorAtributo))