const mediaSimples = (...num) => num.reduce((accum, num2) => accum + num2, 0) / num.length


const mediaPonderada = (...num) => {
    const valortotal = num.reduce((accum, { numero, peso }) => (accum + (numero * (peso ?? 1))), 0)
    const somaP = num.reduce((accum, letra) => accum + (letra.peso ?? 1), 0)

    return valortotal / somaP
}


console.log(`Media simples: ${mediaSimples(2, 6, 3, 7, 4)}`)

console.log(`Media Ponderada: ${mediaPonderada({ numero: 7, peso: 2 }, { numero: 9, peso: 5 }, { numero: 3, peso: 1 })}`)
