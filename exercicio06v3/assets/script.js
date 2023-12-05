const tempoSpan = document.querySelector('#cronometro');
const botaoComecar = document.querySelector('.start');
const mainGrid = document.querySelector('.grid-container');
const container = document.querySelector('.container');

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

const contaOcorrencias = (list) => {
    let counts = {};
    
    for (const num of list) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    return counts;
};

var tempo = 20;
var score = 0;
var numCartas = 16;

const generalGameObserver = () => {
    console.log(tempo);
    tempoSpan.innerHTML = tempo;
    tempo--;

    if (tempo == 0) {
        container.innerHTML = `<p>Game Over. Pontuação: ${score}</p>`
    }
}

setInterval(generalGameObserver, 1000);

const gerarNumAleatorio = () => {
    return Math.floor(Math.random() * sources.length)
}

const popularListaDeCartas = () => {
    let cardList = [];
    let i = 0;
    while (i < numCartas) {
        let currSrc = sources[gerarNumAleatorio()];
        cardList.push(currSrc);
        if (contaOcorrencias(cardList)[currSrc] > 2) {
            i = i - 1;
        }
    }

    return cardList;
}

console.log(popularListaDeCartas());

const popularGrid = (listaDeCartas) => {
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