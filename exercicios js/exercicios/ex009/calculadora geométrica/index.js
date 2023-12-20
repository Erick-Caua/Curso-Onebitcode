let base = 0
let altura = 0
let lado = 0
let baseM = 0
let basem = 0
let raio = 0
let opcao = ''


function areaDoTriangulo(base, altura) {
    let resultado = base * altura / 2
    return resultado
}
function areaDoRetangulo(base, altura) {
    let resultado = base * altura
    return resultado
}
function areaDoQuadrado(lado) {
    let resultado = lado * lado
    return resultado
}
function areaDoTrapezio(baseM, basem, altura) {
    let resultado = (baseM + basem) * altura / 2
    return resultado
}
function areaDoCirculo(raio) {
    let pi = 3.14
    let resultado = pi * (raio * raio)
    return resultado
}

do {
    opcao = prompt('Calculado Geométria:\n' +
        '1 - Área do triângulo\n' +
        '2 - Área do retângulo\n' +
        '3 - Área do quadrado\n' +
        '4 - Área do trapézio\n' +
        '5 - Área do círculo\n' +
        '6 - Sair')


    switch (opcao) {
        case '1':
            base = prompt('Qual a base do triângulo?')
            altura = prompt('Qual a altura do triângulo?')
            alert('A área do Triângulo é: ' + areaDoTriangulo(base, altura))
            break
        case '2':
            base = prompt('Qual a base do retângulo?')
            altura = prompt('Qual a altura do retângulo?')
            alert('A área do retângulo é: ' + areaDoRetangulo(base, altura))
            break
        case '3':
            lado = prompt('Qual o lado do quadrado?')
            alert('A área do quadrado é: ' + areaDoQuadrado(lado))
            break
        case '4':
            baseM = parseFloat(prompt('Qual a base maior do trapézio?'))
            basem = parseFloat(prompt('Qual a base menor do trapézio?'))
            altura = prompt('Qual a altura do trapézio?')
            alert('A área do trapézio é: ' + areaDoTrapezio(baseM, basem, altura))
            break
        case '5':
            raio = prompt('Qual raio do circulo?')
            alert('A área do circulo é: ' + areaDoCirculo(raio))
            break
        case '6':
            alert(
                'Saindo...'
            )
            break
        default:
            alert(
                'Opção invalida'
            )
            break
    }

} while (opcao !== '6')