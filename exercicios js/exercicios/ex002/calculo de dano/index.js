const personagem1 = prompt('Qual o nome do personagem q vai atacar?')
const ataque = prompt('Qual o poder de ataque dele?')

const personagem2 = prompt('Qual o nome do personagem que vai defender?')
let vida = parseFloat(prompt('Quanto de vida ele tem?'))
const defesa = parseFloat(prompt('Qual a defesa desse personagem?'))
const escudo = parseFloat(prompt('Ele tem escudo?(Sim/Não)'))

let dano = 0
let vida2 = 0

if(ataque > defesa && escudo === 'Não' ){
    dano = ataque - defesa
}else if(ataque > defesa && escudo === 'Sim'){
    dano = (ataque - defesa)/2
}
vida2 = vida - dano
alert(
    personagem1 + 'causou ' + dano + 'pontos de dano em ' + personagem2
)
alert(
    personagem1 + ' ataque: ' + ataque + '\n' +
    personagem2 + ' defesa: ' + defesa + '\nescudo: ' + escudo  + ' \nvida inicial: ' + vida + ' \nvida depois do ataque: ' + vida2
)