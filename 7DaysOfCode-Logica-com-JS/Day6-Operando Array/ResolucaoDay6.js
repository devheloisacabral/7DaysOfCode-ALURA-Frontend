const prompt = require('prompt-sync')
const prompt2 = prompt()

const frutas = []
const legumes = []
const laticinios = []
const congelados = []
const doces = []
const limpeza = []


function menu(){


do{
    var confirma = prompt2('Você deseja 1 - adicionar item na sua lista de compras ou 2 - Remover algum item? 3 - Encerrar ')
    
    if(confirma =='1'){
        adiciona()
    }if(confirma == '2'){
        remove()
    }
}while(confirma != '3')

console.log('Lista de compras: \n')
if(frutas.length !== 0){
    
    const juntaFrutas = frutas.join(', ');
    console.log(`Frutas: ${juntaFrutas}`)
}

if(legumes.length !== 0){

    const juntaLegumes = legumes.join(', ');
    console.log(`Legumes: ${juntaLegumes}`)
}

if(laticinios.length != 0){
    
    const juntalaticinios = laticinios.join(', ');
    console.log(`Laticínios: ${juntalaticinios}`)
}

if(congelados.length !== 0){

    const juntaCongelados = congelados.join(', ');
    console.log(`Congelados: ${juntaCongelados}`)
}

if(doces.length !== 0){

    const juntaDoces = doces.join(', ')
    console.log(`Doces: ${juntaDoces}`)
}

if(limpeza.length !== 0){

    const juntaProdutos = limpeza.join(', ')
    console.log(`Produtos: ${juntaProdutos}`)
}
}

function adiciona(){
    const Item = prompt2('Digite o nome do item que voce quer adicionar ')
    const tipoDoItem = prompt2('Em qual dessas categorias esse item se encaixa? \n 1- Frutas \n 2- Legumes e Verduras \n 3- Laticínios \n 4- Congelados \n 5- Doces \n 6- Produtos de limpeza ou produtos de casa ')
    switch(tipoDoItem){
        case '1': frutas.push(Item)
        break
        case '2': legumes.push(Item)
        break
        case '3': laticinios.push(Item)
        break
        case '4': congelados.push(Item)
        break
        case '5': doces.push(Item)
        break
        case '6': limpeza.push(Item)
        break
        default:
        console.log('Retorne e insira um valor valido')
        break

    }
}

function remove(){

    const Item = prompt2('Digite o nome do item que voce quer remover ')
    const tipoDoItem = prompt2('Em qual dessas categorias esse item se encaixa? \n 1- Frutas \n 2- Legumes e Verduras \n 3- Laticínios \n 4- Congelados \n 5- Doces \n 6- Produtos de limpeza ou produtos de casa ')
    switch(tipoDoItem){
        case '1': 
        if(frutas.length !== 0){
            var index = frutas.indexOf(Item)
            frutas.splice(index)
        }else{
            console.log('Voce ainda nao adicionou frutas na sua lista ')
            var confirma2 = prompt2('Deseja adicionar? S/N')
            if(confirma2 == 'S' || confirma2 =='s'){
                menu()
            }else{
                break
            }
        }
                 
        break
        case '2':
        if(legumes.length !== 0){

            var index = legumes.indexOf(Item)
            legumes.splice(index)
        }else{

            console.log('Voce ainda nao adicionou legumes na sua lista ')
            var confirma2 = prompt2('Deseja adicionar? S/N')
            if(confirma2 == 'S' || confirma2 =='s'){
                menu()
            }else{
                break
            }
        }    
        break
        case '3':
        if(laticinios.length !== 0){

            var index = laticinios.indexOf(Item)
            laticinios.splice(index)
        }else{

            console.log('Voce ainda nao adicionou laticinios na sua lista ')
            var confirma2 = prompt2('Deseja adicionar? S/N')
            if(confirma2 == 'S' || confirma2 =='s'){
                menu()
            }else{
                break
            }
        }    
        break
        case '4':
        if(congelados !== 0){

            var index = congelados.indexOf(Item)
            congelados.splice(index)
        }else{
            console.log('Voce ainda nao adicionou congelados na sua lista ')
            var confirma2 = prompt2('Deseja adicionar? S/N')
            if(confirma2 == 'S' || confirma2 =='s'){
                menu()
            }else{
                break
            } 
        }    
        break
        case '5': 
        if(doces.length !== 0){

            var index = doces.indexOf(Item)
            doces.splice(index)
        }else{
            console.log('Voce ainda nao adicionou doces na sua lista ')
            var confirma2 = prompt2('Deseja adicionar? S/N')
            if(confirma2 == 'S' || confirma2 =='s'){
                menu()
            }else{
                break
            } 
        }
        break
        case '6': 
        if(limpeza.length !== 0){

            var index = limpeza.indexOf(Item)
            limpeza.splice(index)
        }else{
            console.log('Voce ainda nao adicionou itens de limpeza na sua lista ')
            var confirma2 = prompt2('Deseja adicionar? S/N')
            if(confirma2 == 'S' || confirma2 =='s'){
                menu()
            }else{
                break
            } 
        }
        break
        default:
        console.log('Retorne e insira um valor valido')
        remove()
        break

    }
}

menu()