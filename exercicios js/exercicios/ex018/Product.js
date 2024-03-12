class Product{
    constructor(name,description,price,inStock = 0){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }
    addToStock(num){
        this.inStock += num
    }
    calculateDiscount(discount){
        this.price = this.price - (this.price*discount)/100
    }
}

const arroz = new Product('arroz','alimento',10,10)

arroz.addToStock(13)
arroz.calculateDiscount(20)

console.log(arroz)