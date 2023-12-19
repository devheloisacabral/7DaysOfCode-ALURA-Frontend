    




function create(){

    const nome = document.getElementById("nomeinput").value
    const data = document.getElementById('datainput').value
    const registrosAntigos = []


    const pessoa = {
        nome: nome,
        data: data
    }
    const pessoas = JSON.parse(localStorage.getItem('pessoas')) || []
    registrosAntigos.push(pessoas)
    console.log(registrosAntigos)
    localStorage.setItem("registro", JSON.stringify(pessoa))
    

}


