function sum(...numbers) {
    return numbers.reduce((accum , num) => accum + num, 0)// somando toos os elementos de um array, o reduce percorre cada elemento do array onde ele vai usar o parametro ACCUM  para acumular o valor somado usando o parametro NUM como o valor atual ao qual a se encotra, ja o numero 0 é o valor inicial do ACCUM!
  }
  
  console.log(sum(1, 1))
  console.log(sum(2, 2, 2, 2, 2))
  console.log(sum(32, 5, 74, 7, 1, 9, 90))