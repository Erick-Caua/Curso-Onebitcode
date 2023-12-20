const numero = prompt('Robô da tabuada\nDigite um numero para calcular a tabuada dele ate 20')

let resultado = ' Tabuada\n '
for(let i = 1; i <= 20; i++){
    resultado += numero + 'x' + i +'=' + numero*i + '\n' 
}
alert(resultado)