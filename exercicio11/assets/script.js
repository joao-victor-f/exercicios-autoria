const btnConfirmar = document.getElementById('btnConfirm');
const inputNome = document.getElementById('nome');
const inputNota = document.getElementById('nota');
const dataTable = document.getElementById('dadosTable');
const form = document.querySelector('form');

btnConfirmar.addEventListener('click', (e) => {
    if (inputNota.value > 100 || inputNota < 0) {
        alert("nota inválida");
    }
    
    if (inputNome.value == '' || inputNota == '') {
        alert("os campos não podem estar vazios");
    }
        else {
        dataTable.innerHTML += `
        <tr>
            <td align="center">${inputNome.value}</th>
            <td align="center">${inputNota.value}</td>
        </tr>
        `
        e.preventDefault();
    }

    form.reset();
})