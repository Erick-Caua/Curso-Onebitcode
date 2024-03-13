class Product{
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity){
        this.inStock += quantity
    }
    calculateDiscount(discount){
        this.price = this.price - (this.price*discount)/100// Ou price*((100 - dicount)/100)
    }
}

const arroz = new Product('arroz','alimento',80)

arroz.addToStock(99)
arroz.calculateDiscount(15)

console.log(arroz)