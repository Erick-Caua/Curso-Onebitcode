export class Component{
    #element = null
    constructor(tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    getElement(){ //Essa classe deverá possuir um atributo privado para armazenar a referência ao elemento do DOM e um método de acesso para ler o valor desse atributo.
        return this.#element
    }
    build(){//Ela também deve possuir um método build para criar o elemento que deve ser chamado uma vez no construtor, mas também deve ser possível chamá-lo novamente através da instância.
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)//atribuindo propriedades com o (this.options) ao elemento alvo(#element)
        return this // retornando a propria instancia
    }
    render(){//Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela instância a qualquer momento.
        if(this.parent instanceof Component){
            this.parent.getElement().append(this.#element)
        }else{
            document.querySelector(this.parent).append(this.#element)
        }
    }
}