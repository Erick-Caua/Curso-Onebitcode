const Character = require("./Character.js")

class Warrior extends Character {
    constructor(name, life, attack, defense, shieldPoints) {
        super(name, life, attack, defense)
        this.shieldPoints = shieldPoints
        this.position = 'ataque'
    }
    
    attackCharacter(character) {
        if (this.position === 'ataque' ) {
            character.life -= this.attack - character.defense
        }
    }
    changePosition(){
        if (this.position === 'ataque') {
            this.position = 'defesa'
            this.defense += this.shieldPoints
          } else {
            this.position = 'ataque'
            this.defense -= this.shieldPoints
          }
    }
}

module.exports = Warrior