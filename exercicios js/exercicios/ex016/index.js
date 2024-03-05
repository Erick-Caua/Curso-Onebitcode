const dayjs = require("dayjs")

function birthday(date) {
  const birthday = dayjs(date)// pegando a data de nacimento
  const today = dayjs()// pegando dia de hoje
  const ageInYears = today.diff(birthday, 'year') //pegando quantos anos a pessoa tem em anos
  const nextBirthday = birthday.add(ageInYears + 1, 'year') // sabendo quantos anos ela fará
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1 //dias para o proximo aniversario

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("2004-03-24")