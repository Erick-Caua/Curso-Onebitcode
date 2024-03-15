const Character = require("./Character.js")

class Thief extends Character {
    attackCharacter(character) {
        return character.life -= (this.attack - character.defense) * 2
    }
}

module.exports = Thief