const btnConfirmar = document.getElementById('btnConfirm');
const inputNome = document.getElementById('nome');
const inputNota = document.getElementById('nota');
const dataTable = document.getElementById('dadosTable');
const form = document.querySelector('form');

var alunosData = [];
if (localStorage.getItem("alunos-data")) {
    alunosData = JSON.parse(localStorage.getItem("alunos-data"));
}

class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
};


for (var alunoData of alunosData) {
    if (alunoData) {
        dataTable.innerHTML += 
            `<tr>
                <td align="center">${alunoData.nome}</th>
                <td align="center">${alunoData.nota}</td>
            </tr>`
    }
}

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
        e.preventDefault();
        const aluno = new Aluno(inputNome.value, inputNota.value);

        alunosData.push(aluno);

        localStorage.setItem("alunos-data", JSON.stringify(alunosData));
        dataTable.innerHTML += `
        <tr>
            <td align="center">${inputNome.value}</th>
            <td align="center">${inputNota.value}</td>
        </tr>
        `;

        
    }

    form.reset();
})