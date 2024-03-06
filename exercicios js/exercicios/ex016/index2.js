const dayjs = require('dayjs')

function birthday(date){
    const dayBirthaday = dayjs(date)
    const today = dayjs()
    const ageInYear = today.diff(dayBirthaday,'year')
    const nextBirthday = dayBirthaday.add(ageInYear + 1,'year')
    const dayNextBirthaday = nextBirthday.diff(today,'day') 


    console.log(`Idade: ${ageInYear}`)
    console.log(`Próximo aniversario:${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias ate completar ${ageInYear+1} : ${dayNextBirthaday + 1} dias`)
}

birthday("2004-03-24")
birthday("1979-07-13")
birthday('1990-08-28')
birthday('2013-09-29')
birthday('2008-06-08')