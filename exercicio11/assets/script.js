const btnConfirmar = document.getElementById('btnConfirm');
const inputNome = document.getElementById('nome');
const inputNota = document.getElementById('nota');
const dataTable = document.getElementById('dadosTable');
const form = document.querySelector('form');

btnConfirmar.addEventListener('click', (e) => {
    let valido = true;
    if (inputNota.value > 100 || inputNota.value < 0) {
        alert("nota inválida");
        valido = false;
    }
    
    if (inputNome.value == '' || inputNota.value == '') {
        alert("os campos não podem estar vazios");
        valido = false;
    }

    if (valido) {
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