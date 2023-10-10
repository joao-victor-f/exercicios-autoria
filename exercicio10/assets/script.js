const btnSoma = document.getElementById('mais');
const btnSubtracao = document.getElementById('menos');
const btnMultiplicacao = document.getElementById('multiplicacao');
const btnDivisao = document.getElementById('divisao');

const inputN1 = document.getElementById('n1');
const inputN2 = document.getElementById('n2');

const somar = (n1, n2) => {
    return n1 + n2;
}

const subtrair = (n1, n2) => {
    return n1 - n2;
}

const multiplicar = (n1, n2) => {
    return n1 * n2;
}

const dividir = (n1, n2) => {
    return n1 / n2;
}

btnSoma.addEventListener('click', () => {
    alert(somar(parseFloat(inputN1.value), parseFloat(inputN2.value)));
})

btnSubtracao.addEventListener('click', () => {
    console.log('subtracao');
    alert(subtrair(parseFloat(inputN1.value), parseFloat(inputN2.value)));
})

btnMultiplicacao.addEventListener('click', () => {
    alert(parseFloat((inputN1.value), parseFloat(inputN2.value)));
})

btnDivisao.addEventListener('click', () => {
    alert(dividir(parseFloat(inputN1.value), parseFloat(inputN2.value)));
})