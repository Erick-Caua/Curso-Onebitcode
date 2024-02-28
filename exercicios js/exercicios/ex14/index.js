const mediaSimples = (...num) => num.reduce((accum, num2) => accum + num2, 0) / num.length


const mediaPonderada = (...num) => {
    const valortotal = num.reduce((accum, { numero, peso }) => (accum + (numero * (peso ?? 1))), 0)
    const somaP = num.reduce((accum, letra) => accum + (letra.peso ?? 1), 0)

    return valortotal / somaP
}

const mediana = (...num) => {
    const orderedNumbers = [...num].sort((a, b) => a - b)// criando um array novo com os elementos do array NUM colocando os elementos em ordem.
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return mediaSimples(firstMedian, secondMedian)
}


const mode = (...numbers) => {
    // [ [n, qtd], [n, qtd], [n, qtd] ]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length // filtrando todos os elementos do array NUMBERS que são iguais ao elemento atual no Array NUM, ou seja o MAP em cada um  dos números vai filtrar e e devolver todas as ocorencias daquele numero, o .length serve para pegar a quantidade de ocorencias, geraando um array bidimencional.
    ])
    quantities.sort((a, b) => b[1] - a[1]) // colocando em ordem decrescente
    return quantities[0][0]
}

 
console.log(`Media simples: ${mediaSimples(2, 6, 3, 7, 4)}`)

console.log(`Media Ponderada: ${mediaPonderada({ numero: 7, peso: 2 }, { numero: 9, peso: 5 }, { numero: 3, peso: 1 })}`)

console.log(`Mediana: ${mediana(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${mediana(15, 14, 8, 7, 3)}`)

console.log(`Moda: ${mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)


