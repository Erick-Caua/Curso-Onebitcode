class Book{
    constructor(title){
        this.title = title
        this.published = false
    }

    publishd(){ //metodo
        this.published = true 
    }
}

const eragon = new Book('Eragon')
const eldest = new Book('Eldest')

eragon.publishd()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book)