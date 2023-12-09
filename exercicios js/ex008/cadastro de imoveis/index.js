const imoveis = []
let opcao = ''
let imovel = {}


do {
    opcao = prompt(
        "Quantidade de Imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    )
    switch (opcao) {
        case '1':
            detalhesImoveis.nome = prompt('Nome do proprietário?')
            detalhesImoveis.quartos = prompt('Quantidade de quartos?')
            detalhesImoveis.banheiros = prompt('Quantidade de banheiros?')
            detalhesImoveis.garagem = prompt('Possui garagem?Sim/Não')
            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
            )
            if (confirma) {
                imoveis.push(imovel)
            }
            break
        case '2':
            for (let i = 0; i <= imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].nome +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui Garagem? " + imoveis[i].garagem
                )

            }
            break
        case '3':
            alert('Saindo...')
            break

        default:
            alert('Opção Invalida')
            break
    }
} while (opcao !== '3')
