const div = document.querySelector('#div');
const img = document.querySelector('#img');
const botao = document.querySelector('#botao');

div.style.background = 'blue';

botao.addEventListener('click', () => {

    if (div.style.background == 'blue') {
        div.style.background = 'red';
    } else {
        div.style.background = 'blue';
    }
});

const trocarSrc = (e) => {
    if (e.type == 'mousedown') {
        img.src = '../assets/lampada-acesa.png';
    }
    if (e.type == 'mouseup') {
        img.src = '../assets/lampada-apagada.jpg';
    }
};

img.addEventListener('mousedown', trocarSrc);
img.addEventListener('mouseup', trocarSrc);