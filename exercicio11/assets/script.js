const btnConfirmar = document.getElementById('btnConfirm');
const inputNome = document.getElementById('nome');
const inputNota = document.getElementById('nota');
const dataTable = document.getElementById('dadosTable');
const form = document.querySelector('form');

btnConfirmar.addEventListener('click', (e) => {
    if (inputNota.value > 100 || inputNota < 0) {
        alert("nota inválida");
    } else {
        dataTable.innerHTML += `
            <td align="center">${inputNome.value}</td>
            <td align="center">${inputNota.value}</td>
            <br>
        `
        e.preventDefault();
    }

    form.reset();
})