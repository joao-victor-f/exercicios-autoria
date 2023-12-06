const tempoSpan = document.querySelector('#cronometro');
const botaoRecomecar = document.querySelector('.restart');
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

const embaralhaCartas = (list) => {
    //algoritmo de fisher-yates
    for (let i = 0; i < list.length; i++) {
        let k = geraNumAleatorio(list.length);
        [list[i], list[k]] = [list[k], list[i]];
    }

    return list;
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
};

const popularGrid = () => {
    shuffledCardList = embaralhaCartas(cardList);
    for (let i = 0; i < shuffledCardList.length; i++) {
        mainGrid.innerHTML += createGridItem(shuffledCardList[i]);
    }
};
window.onload = popularGrid;

botaoRecomecar.addEventListener('click', popularGrid);