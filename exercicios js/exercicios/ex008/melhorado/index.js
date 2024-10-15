const btncadastrar = document.querySelector("#cadastrar")
const listar = document.querySelector("#listarImoveis")
const cadastrar = document.querySelector(".cadastrarImovel")
const formCadastrar = document.querySelector("#formCadastrar")
const lista = document.querySelector(".listaImoveis")
const estado = document.querySelector(".estado")

let imoveis = []



function cadastrarImovel() {
    const imovel = {
        proprietario: cadastrar.nomeDono.value,
        quartos: cadastrar.qntQuartos.value,
        banheiros: cadastrar.qntBanheiros.value,
        garagem: cadastrar.garagem.value
    }

    imoveis.push(imovel)

    console.log(imoveis)
}



btncadastrar.addEventListener("click", () => {
    if(estado.style.display ==="none"){
        estado.style.display = "block"
    }else{
        estado.style.display = "none"
    }
})

formCadastrar.addEventListener("click", (e) => {
    e.preventDefault();
    
    cadastrarImovel()

})



























/*const imoveis = []
let opcao = ''
let imovel = {}


do {
    opcao = prompt(
        "Quantidade de Imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    )
    switch (opcao) {
        case '1':
            imovel.nome = prompt('Nome do proprietário?')
            imovel.quartos = prompt('Quantidade de quartos?')
            imovel.banheiros = prompt('Quantidade de banheiros?')
            imovel.garagem = prompt('Possui garagem?Sim/Não')
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
} while (opcao !== '3')*/
