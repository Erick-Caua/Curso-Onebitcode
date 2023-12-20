let saldo = parseFloat(prompt('Qual a quantia inicial?'))

let adicionar = 0
let remover = 0
let opcoes = ''

do {
    opcao = prompt(
        "Saldo disponível: R$ " + saldo +
        "\n1 - Adicionar dinheiro" +
        "\n2 - Remover dinheiro" +
        "\n3 - Sair")
    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
            break
        case "2":
            saldo -= prompt("Informe o valor a ser removido:")
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Entrada inválida.")
            break
    }

} while (opcoes !== '3');




