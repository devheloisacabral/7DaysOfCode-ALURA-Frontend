const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => {
    document.getElementById('modal').classList.remove('active');
    clearFields();
}

//PADRAO PARA CRIAR QUALQUER FUNCIONALIDADE DO CRUD
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];

const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient));



// CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
}
// READ
const readClient = () => getLocalStorage();

// UPDATE
const updateClient = (index, client) => {
    const dbClientUp = readClient();
    dbClientUp[index] = client;
    setLocalStorage(dbClientUp);
}

// DELETE
const deleteClient = (index) => {
    const dbClientDel = readClient();
    dbClientDel.splice(index, 1);
    setLocalStorage(dbClientDel);
}

// Interação com layout HTML

const isValidFields = () => {
    return document.getElementById('form').reportValidity();
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = '');
}


const saveClient = () => {
    if (isValidFields()) {
        const newUser = {
            nome: document.getElementById('nome').value,
            sobrenome: document.getElementById('sobrenome').value,
            aniversario: document.getElementById('data').value
        }
        const index = document.getElementById('nome').dataset.index;
        if (index == 'new') {
            createClient(newUser);
            updateTable();
            closeModal();
            console.log('Cliente cadastrado com sucesso!');
        } else {
            updateClient(index, newUser);
            updateTable();
            closeModal();
            console.log('Cliente editado com sucesso!');
        }

    }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${client.nome}</td>
    <td>${client.sobrenome}</td>
    <td>${client.aniversario}</td>
    
    <td>
        <button type="button" class="button green" id="edit-${index}">Editar</button>
        <button type="button" class="button red" id="delete-${index}">Excluir</button>
    </td>`;
    document.querySelector('#tableClient>tbody').appendChild(newRow);
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row));
}

const updateTable = () => {
    const dbClientTable = readClient()
    clearTable();
    dbClientTable.forEach(createRow);
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('sobrenome').value = client.sobrenome
    document.getElementById('data').value = client.aniversario
    document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index];
    client.index = index;
    fillFields(client);
    openModal();
}

const editDelete = (event) => {
    if (event.target.type == 'button') {
        const [action, index] = event.target.id.split('-');

        if (action == 'edit') {
            editClient(index)
        } else {
            const userDelete = readClient()[index];
            const response = confirm(`Deseja Relamente excluir o cliente ${userDelete.nome}`);
            if (response) {
                deleteClient(index);
                updateTable();
            }

        }
    }

}



updateTable();

// Eventos

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('salvar')
    .addEventListener('click', saveClient);

document.getElementById('cancelar')
    .addEventListener('click', closeModal);

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete);