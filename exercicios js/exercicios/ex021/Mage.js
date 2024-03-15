const Character = require("./Character.js")

class Mage extends Character {
    constructor(name, life, attack, defense, magicPoints) {
        super(name, life, attack, defense)
        this.magicPoints = magicPoints
    }
    attackCharacter(character) {
        return character.life -= (this.attack + this.magicPoints) - character.defense
    }

    heal(character) {
        return character.life += this.magicPoints * 2
    }
}
module.exports = Mage