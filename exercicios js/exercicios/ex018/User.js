class User{
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(){
        if(this.email == 'erc@gmail.com' && this.password == 'erick'){
            console.log('Login Bem sucedido')
        }else{
            console.log('Login errado')
        }
    }
}

const caua = new User('Erick Cauã','erc@gmail.com','erick' )

console.log(caua)

caua.login()