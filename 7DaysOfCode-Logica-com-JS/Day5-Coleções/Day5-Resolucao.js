const prompt = require('prompt-sync')
const prompt2 = prompt()

const frutas = []
const Legumes = []
const laticinios = []
const congelados = []
const doces = []
const produtos = []



do{
    var confirma = prompt2('Você deseja adicionar item na sua lista de compras?(S/N) ')
    
    if(confirma =='S' || confirma == 's'){
        const Item = prompt2('Digite o nome do item que voce quer adicionar ')
        const tipoDoItem = prompt2('Em qual dessas categorias esse item se encaixa? \n 1- Frutas \n 2- Legumes e Verduras \n 3- Laticínios \n 4- Congelados \n 5- Doces \n 6- Produtos de limpeza ou produtos de casa ')
        switch(tipoDoItem){
            case '1': frutas.push(Item)
            break
            case '2': Legumes.push(Item)
            break
            case '3': laticinios.push(Item)
            break
            case '4': congelados.push(Item)
            break
            case '5': doces.push(Item)
            break
            case '6': produtos.push(Item)
            break
            default:
            console.log('Retorne e insira um valor valido')
            break

        }
    }
}while(confirma == 'S' || confirma =='s')

console.log('Lista de compras: \n')
if(frutas.length !== 0){
    
    const juntaFrutas = frutas.join(', ');
    console.log(`Frutas: ${juntaFrutas}`)
}

if(Legumes.length !== 0){

    const juntaLegumes = Legumes.join(', ');
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

if(produtos.length !== 0){

    const juntaProdutos = produtos.join(', ')
    console.log(`Produtos: ${juntaProdutos}`)
}

