"use strict";

var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, num = new Array(_len), _key = 0; _key < _len; _key++) {
    num[_key] = arguments[_key];
  }
  return num.reduce(function (accum, num2) {
    return accum + num2;
  }, 0) / num.length;
};
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, num = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    num[_key2] = arguments[_key2];
  }
  var valortotal = num.reduce(function (accum, _ref) {
    var numero = _ref.numero,
      peso = _ref.peso;
    return accum + numero * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  var somaP = num.reduce(function (accum, letra) {
    var _letra$peso;
    return accum + ((_letra$peso = letra.peso) !== null && _letra$peso !== void 0 ? _letra$peso : 1);
  }, 0);
  return valortotal / somaP;
};
var mediana = function mediana() {
  for (var _len3 = arguments.length, num = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    num[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(num).sort(function (a, b) {
    return a - b;
  }); // criando um array novo com os elementos do array NUM colocando os elementos em ordem.
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return mediaSimples(firstMedian, secondMedian);
};
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length // filtrando todos os elementos do array NUMBERS que são iguais ao elemento atual no Array NUM, ou seja o MAP em cada um  dos números vai filtrar e e devolver todas as ocorencias daquele numero, o .length serve para pegar a quantidade de ocorencias, geraando um array bidimencional.
    ];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  }); // colocando em ordem decrescente
  return quantities[0][0];
};
console.log("Media simples: ".concat(mediaSimples(2, 6, 3, 7, 4)));
console.log("Media Ponderada: ".concat(mediaPonderada({
  numero: 7,
  peso: 2
}, {
  numero: 9,
  peso: 5
}, {
  numero: 3,
  peso: 1
})));
console.log("Mediana: ".concat(mediana(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(mediana(15, 14, 8, 7, 3)));
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));