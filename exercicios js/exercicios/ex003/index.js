const metros = parseFloat(prompt('Dê uma medida em metros'))
const converter = parseFloat(prompt('Converter em qual medida?\n1 - milímetro (mm)\n2 - centímetro (cm)\n3 - decímetro (dm)\n4 - decâmetro (dam)\n5 - hectômetro (hm)\n6 - quilômetro (km)'))

let resultado = 0
switch(converter){
    case 1: resultado = metros * 1000
    alert(
        metros + 'm' + ' em milímeto são: ' + resultado + 'mn'
    )
    break
    case 2: resultado = metros * 100
    alert(
        metros + 'm' + ' em centímetro são: ' + resultado + 'cm'
    )
    break
    case 3: resultado = metros * 10
    alert(
        metros + 'm' + ' em decímetro são: ' + resultado + 'dm'
    )
    break
    case 4: resultado = metros /10
    alert(
        metros + 'm' + ' em decâmetro são: ' + resultado + 'dam'
    )
    break
    case 5: resultado = metros / 100
    alert(
        metros + 'm' + ' em hectômetro são: ' + resultado + 'hm'
    )
    break
    case 6: resultado = metros / 1000
    alert(
        metros + 'm' + ' em quilômetro são: ' + resultado + 'km'
    )
    break

    default:
        alert(
            'Opção invalida'
        )
}