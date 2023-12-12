const scoreSpan = document.querySelector('#score');
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

let firstCard, secondCard;
let gridBloqueado = false;
let score = 0;
let matchSpree = 0;
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
    <div class="imagem-container">
        <div class="imagem-frente">
            <img src="../assets/carta-virada.jpeg" alt=''>
        </div>

        <div class="imagem-costa">
            <img src='${source}' alt=''>
        </div>
    </div>
    `
};

const popularGrid = () => {
    mainGrid.innerHTML = '';
    shuffledCardList = embaralhaCartas(cardList);
    for (let i = 0; i < shuffledCardList.length; i++) {
        let cardItem = document.createElement('div');

        cardItem.classList.add('grid-item');
        cardItem.setAttribute('card-src', shuffledCardList[i]);
        cardItem.innerHTML = createGridItem(shuffledCardList[i]);
        cardItem.addEventListener('click', flipCard);
        mainGrid.appendChild(cardItem);
    };
};

const restartGame = () => {
    resetBoard();
    popularGrid();
    //addFlipOnClick();
    score = 0;
    scoreSpan.innerHTML = score;
}

window.onload = restartGame;

botaoRecomecar.addEventListener('click', restartGame);

console.log(document.querySelectorAll('.grid-item'));

// const addFlipOnClick = () => {
//     const divs = document.querySelectorAll('.grid-item');
//     divs.forEach(div => {
//         div.addEventListener('click', () => {
//             if (div.classList.contains('virada')) {
//                 div.classList.remove('virada');
//             } else {
//                 div.classList.add('virada');
//             };
//         });
//     });
// }

function flipCard() {
    if (gridBloqueado) return;
    if (this === firstCard) return;
    if (checkIfGameIsOver()) {
        setTimeout(gameOver, 100);
    }
    this.classList.add('virada');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    gridBloqueado = true;
    buscaMatch();
}

const buscaMatch = () => {
    let isMatch = firstCard.getAttribute("card-src") === secondCard.getAttribute("card-src");
    // isMatch ? disableCards() : unflipCards();
    if (isMatch == true) {
        matchSpree++;
        score = score + matchSpree * 10;
        scoreSpan.innerHTML = score;
        disableCards();
    } else {
        matchSpree = 0;
        unflipCards();
    }
}

const disableCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', secondCard);

    resetBoard();
}

const unflipCards = () => {
    setTimeout(() => {
        firstCard.classList.remove('virada');
        secondCard.classList.remove('virada');
        resetBoard();
    }, 1000);
}

const resetBoard = () => {
    firstCard = null;
    secondCard = null;
    gridBloqueado = false;
}

const checkIfGameIsOver = () => {
    let cardItems = document.querySelectorAll('.grid-item');
    let numeroDeCartasViradas = 0;
    cardItems.forEach(cardItem => {
        if (cardItem.classList.contains('virada')) {
            numeroDeCartasViradas++;
        }
    })

    console.log(numeroDeCartasViradas);
    if (numeroDeCartasViradas == 15) {
        return true;
    }

    return false;
}

const gameOver = () => {
    alert(`Game Over. pontuação: ${score}`);
    restartGame();
}