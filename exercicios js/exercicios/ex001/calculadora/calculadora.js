function executarOperacoes() {
    const entrada1 = solicitarNumero("Informe o primeiro número:");
    if (entrada1 === null) {
        return; // Agora está dentro de uma função, e isso é permitido
    }

    const entrada2 = solicitarNumero("Informe o segundo número:");
    if (entrada2 === null) {
        return;
    }

    const soma = entrada1 + entrada2;
    const subtracao = entrada1 - entrada2;
    const multiplicacao = entrada1 * entrada2;
    const divisao = entrada1 / entrada2;

    alert(
        "Resultados:\n" +
        "\nSoma: " + soma +
        "\nSubtração: " + subtracao +
        "\nMultiplicação: " + multiplicacao +
        "\nDivisão: " + divisao
    );
}

// Função para solicitar números
function solicitarNumero(mensagem) {
    while (true) {
        const entrada = prompt(mensagem);
        if (entrada === null) return null; // Permite cancelar o processo
        const numero = parseFloat(entrada.trim());
        if (!isNaN(numero)) {
            return numero; // Retorna o número válido
        }
        alert("Por favor, informe um número válido.");
    }
}

// Chama a função principal
executarOperacoes();