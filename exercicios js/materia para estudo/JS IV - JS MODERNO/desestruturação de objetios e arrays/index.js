const person1 = {
    name1: "Luke",
    job1: "Farmer",
    parents1: ["Anakin", "Padme"]
  }
  
  const name1 = person1.name
  
  const { job1, parents1 } = person1
  
  console.log(name1, job1, parents1)
  
  const [father1, mother1] = parents1
  
  console.log(father1, mother1)
  
  function createUser({ name1, job1, parents1 /* desestruturando o objeto person1 */ }) {
    const id1 = Math.floor(Math.random() * 9999) // criando um numero aleatorio
    return {
      id1,
      name1,
      job1,
      parents1
    }
  }
  
  const luke1 = createUser(person1)
  
  console.log(luke1)

