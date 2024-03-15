class Character {
    constructor(name, life, attack, defense) {
        this.name = name
        this.life = life
        this.attack = attack
        this.defense = defense
    }

    attackCharacter(character) {
        return character.life -= this.attack - character.defense
    }
}

module.exports = Character