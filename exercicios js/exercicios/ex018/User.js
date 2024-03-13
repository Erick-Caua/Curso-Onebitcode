class User{
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email,password){
        if(this.email === email && this.password === password){
            console.log('Login Bem sucedido')
        }else{
            console.log('Login errado')
        }
    }
}

const caua = new User('Erick Cauã','erc@gmail.com','erick' )

console.log(caua)

caua.login('erc@gmail.com','erick')