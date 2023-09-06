const divs = document.querySelectorAll('.grid-item');
const tempoSpan = document.querySelector('#cronometro');
const botaoComecar = document.querySelector('.start');

divs.forEach(div => {
    div.addEventListener('click', () => {
        if (div.classList.contains('virada')) {
            div.classList.remove('virada');
        } else {
            div.classList.add('virada');
        };
    });
});

tempo = 20;

const iniciarCronometro = () => {
    console.log(tempo);
    tempoSpan.innerHTML = tempo;
    tempo--;
}

setInterval(iniciarCronometro, 1000);