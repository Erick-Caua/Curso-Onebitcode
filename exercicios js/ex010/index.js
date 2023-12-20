const vagas = []


function listarVaga() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function criarVaga() {
    const nome = prompt('Nome para a vaga')
    const descrição = prompt('Descrição da vaga')
    const dataLimite = prompt('Qual a data limite (dd/mm/aaaa)')

    const confirma = confirm(
        "Salvar esta vaga?\n" +
        "\nNome da vaga: " + nome +
        "\nDescrição: " + descrição +
        "\nData Limite: " + dataLimite
    )
    if (confirma) {
        const novavaga = { nome, descrição, dataLimite, candidatos: [] }
        vagas.push(novavaga)
        alert("Vaga criada com sucesso!")
    }
}

function visualizarVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    if(indice>= vagas.length || indice < 0 ){
        alert('indice invalido')
        return
    }
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos:" + candidatosEmTexto
    )
}

function increverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada")
    }else{
        alert("Inscrição cancelada")
    }

}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }else{
        alert("Vaga não excluída.")
    }

}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida.")
        }

    } while (opcao !== "6");
}

executar()