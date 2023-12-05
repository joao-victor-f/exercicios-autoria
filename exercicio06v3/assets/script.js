const tempoSpan = document.querySelector('#cronometro');
const botaoComecar = document.querySelector('.start');
const mainGrid = document.querySelector('.grid-container');
const sources = [
    '../assets/ratata.jpeg',
    '../assets/fletchling.jpeg',
    '../assets/pidgey.jpeg',
    '../assets/pikachu.jpeg',
    '../assets/geodude.jpeg',
    '../assets/ekans.jpeg',
    '../assets/charmander.jpeg',
    '../assets/bulbasaur.png'
];


tempo = 20;

const iniciarCronometro = () => {
    console.log(tempo);
    tempoSpan.innerHTML = tempo;
    tempo--;
}

setInterval(iniciarCronometro, 1000);

const gerarNumAleatorio = () => {
    return Math.floor(Math.random() * sources.length)
}

const popularGrid = (numCartas) => {
    for (let i = 0; i < numCartas; i++) {
        setTimeout('400');
        mainGrid.innerHTML += createGridItem(sources[gerarNumAleatorio()]);
    }
};

const createGridItem = (source) => {
    return `
    <div class="grid-item">
    <div class="imagem-container">
    <div class="imagem-frente">
    <img src="../assets/carta-virada.jpeg" alt=''>
    </div>
    
    <div class="imagem-costa">
    <img src='${source}' alt=''>
    </div>
    </div>
    </div>
    `
}

popularGrid(16);
const divs = document.querySelectorAll('.grid-item');
divs.forEach(div => {
    div.addEventListener('click', () => {
        console.log('a');
        if (div.classList.contains('virada')) {
            div.classList.remove('virada');
        } else {
            div.classList.add('virada');
        };
    });
});