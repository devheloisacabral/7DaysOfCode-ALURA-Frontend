const prompt = require('prompt-sync')
const prompt2 = prompt()

const numeroSorteado = Math.floor(Math.random() * 10)
console.log('Tente adivinhar o numero, ele está entre 0 e 10')


for(i=0;i<2;i++){
    const adivinha = parseInt(prompt2('Digite seu chute '))
    if(adivinha == numeroSorteado){
        console.log('Você acertou')
        break
    }else{
        console.log('Voce errou')
    }continue
}

console.log(`O numero sorteado era ${numeroSorteado}`)