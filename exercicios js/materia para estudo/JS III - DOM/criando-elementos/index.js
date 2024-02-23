function addInput() {
    const ul = document.getElementById('inputs')
  
    const newLi = document.createElement('li')
    newLi.className = 'list-item' // dando uma classe ao LI
    newLi.innerText = 'Novo input: ' // colocando um texto no LI
  
    const newInput = document.createElement('input')
    newInput.type = 'text' // definindo o tipo do IMPUT
    newInput.name = 'input'
  
    newLi.appendChild(newInput) // colocano o imput dentro do LI
    ul.appendChild(newLi) // colocano o Li dentro da UL
  }