const prompt = require('prompt-sync')
const prompt2 = prompt()

do{
    var confirma = parseInt(prompt2('As operações disponíveis deverão ser: 1- soma \n 2- subtração,\n 3- multiplicação,\n 4- divisão,\n 5-sair \n'))
    switch(confirma){
        case 1: soma()
        break
        case 2: subtracao()
        break
        case 3: multiplicacao()
        break
        case 4: divisao()
        break
        default: console.log(`Até breve!`)
        break
    }
}while(confirma != '5')

function soma(){
    const numero1 = parseInt(prompt2('Numero 1: '))
    const numero2 = parseInt(prompt2('Numero 2: '))

    const soma = numero1 + numero2
    console.log(`\n Soma = ${soma} \n`)
}

function subtracao(){
    const numero1 = parseInt(prompt2('Numero 1: '))
    const numero2 = parseInt(prompt2('Numero 2: '))

    const subtracao = numero1 - numero2
    console.log(`\n Subtração = ${subtracao} \n`)
}

function multiplicacao(){
    const numero1 = parseInt(prompt2('Numero 1: '))
    const numero2 = parseInt(prompt2('Numero 2: '))

    const multiplicacao = numero1 * numero2
    console.log(`\n Multiplicação = ${multiplicacao} \n`)
}

function divisao(){
    const numero1 = parseInt(prompt2('Dividendo: '))
    const numero2 = parseInt(prompt2('Divisor: '))

    const divisao = numero1 / numero2
    console.log(`\n Divisão = ${divisao} \n`)
}