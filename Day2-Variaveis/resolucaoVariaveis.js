
const prompt = require('prompt-sync')
const prompt2 = prompt()

const nome = prompt2('Qual seu nome? ')
const idade = prompt2('Qual sua idade? ')
const linguagem = prompt2('Qual linguagem de programação voce está estudando? ')

console.log(`Olá ${nome}, voce tem ${idade} anos e já está aprendendo ${linguagem}`)

const confirmacao = parseInt(prompt2(`Voce está gostando de estudar ${linguagem}? (1- Sim/ 2- Nao)`))

switch(confirmacao){
    case 1: console.log('Muito bom! Continue estudando e você terá muito sucesso.')
    break
    case 2: console.log('Ahh que pena... ')
    break
}
