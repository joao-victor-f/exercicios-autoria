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
    '../assets/bulbasaur.png',
    
];

let cardList = [
    '../assets/ratata.jpeg',
    '../assets/fletchling.jpeg',
    '../assets/pidgey.jpeg',
    '../assets/pikachu.jpeg',
    '../assets/geodude.jpeg',
    '../assets/ekans.jpeg',
    '../assets/charmander.jpeg',
    '../assets/bulbasaur.png',
    '../assets/ratata.jpeg',
    '../assets/fletchling.jpeg',
    '../assets/pidgey.jpeg',
    '../assets/pikachu.jpeg',
    '../assets/geodude.jpeg',
    '../assets/ekans.jpeg',
    '../assets/charmander.jpeg',
    '../assets/bulbasaur.png'
];

const geraNumAleatorio = (limite) => {
    return Math.floor(Math.random() * limite);
}

const embaralhaCartas = (cardList) => {
    //algoritmo de fisher-yates
    for (let i = 0; i < cardList.length; i++) {
        let k = geraNumAleatorio(cardList.length);
        [cardList[i], cardList[k]] = [cardList[k], cardList[i]];
    }
}

embaralhaCartas(cardList);
console.log(cardList);