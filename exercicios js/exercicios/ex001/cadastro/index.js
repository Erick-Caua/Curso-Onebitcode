const primeiroNome = prompt("Informe o primeiro nome do recruta:")
const sobreNome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")

let anoAtual = new Date().getFullYear();

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobreNome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (anoAtual - anoDeNascimento )
  )