const carro1 = prompt('Qual o modelo do primeiro carro?')
const velocidadeCarro1 = parseFloat(prompt('Qual a velocidade maxima desse carro?'))

const carro2 = prompt('Qual o modelo do segundo carro?')
const velocidadeCarro2 = parseFloat(prompt('Qual a velocidade maxima desse carro?'))

if(velocidadeCarro1 > velocidadeCarro2){
    alert(carro1 +' é mais rapido do que ' + carro2)
}else if(velocidadeCarro1 < velocidadeCarro2){
    alert(carro2 + " é mais rapido do que " + carro1)
}else{
    alert("Ambos os carros têm a mesma velocidade")
}