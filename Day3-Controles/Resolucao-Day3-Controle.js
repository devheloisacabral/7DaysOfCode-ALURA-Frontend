// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const area = prompt2('Voce quer seguir para área de Front ou seguir para a área de Back? ')
switch(area){
    case 'Front':
        var tecnologia = prompt2('Voce quer aprender React ou aprender Vue? ')
    break
    case 'Back':
        var tecnologia = prompt2('Voce quer aprender C# ou aprender Java? ')      
    break        
}

console.log(`Legal voce querer aprender ${tecnologia}, é uma tecnologia muito importante`)

const seguir = prompt2('Voce deseja seguir (1) estudando essa área ou pretende se desenvolver (2) para se tornar full stack? ')

switch(seguir){
    case '1': console.log('Ótimo, a Alura tem diversos cursos para te ajudar a continuar no ' + area)
    break
    case '2': console.log('Ótimo, é muito importante aumentar os conhecimentos que temos')
    break
}
const listaTecnologiasNovas = []

while(confirma != 'N'){
    var confirma = prompt2('Você tem alguma outra tecnologia que gostaria de aprender além dessas?(Escreva o nome dela ou digite (N) ')
    listaTecnologiasNovas.push(confirma)
}

const limpa = listaTecnologiasNovas.pop()

console.log(listaTecnologiasNovas)
