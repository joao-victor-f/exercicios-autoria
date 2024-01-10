const scoreSpan = document.querySelector("#score");
const botaoRecomecar = document.querySelector(".restart");

const mainGrid = document.querySelector(".grid-container");
const container = document.querySelector(".container");

const placarSection = document.querySelector("#placar-section");
const placarContainer = document.querySelector("#placar");

const currentUserInfo = localStorage.getItem("currentUserInfo");
const currentUser = currentUserInfo ? JSON.parse(currentUserInfo) : null;

const windowUrl = window.location.hostname;
const href = windowUrl.includes("github.io")
	? "/exercicios-autoria/exercicio12/src/login.html"
	: "/exercicio12/src/login.html";

if (Object.keys(currentUser).length === 0) {
	document.body.style.display = "none";
	window.location.href = href;
}

const geraPosicao = (apelido, score) => {
	return `<li>${apelido} - ${score}</li>`;
};

const compareByScore = (a, b) => {
	return b.score - a.score;
};

const popularPlacar = () => {
	const scoresInfo = localStorage.getItem("scores");
	const scores = scoresInfo ? JSON.parse(scoresInfo) : {};

	if (Array.isArray(scores)) {
		scores.sort(compareByScore);
	} else {
		placarSection.innerHTML +=
			"<p>Não há ninguém aqui ainda, então você pode ser o primeiro!</p>";
	}

	if (Object.keys(scores).length === 0) return;

	for (const score of scores) {
		placarContainer.innerHTML += geraPosicao(score.nome, score.score);
	}
};

popularPlacar();

const sources = [
	"../assets/jogo/ratata.jpeg",
	"../assets/jogo/fletchling.jpeg",
	"../assets/jogo/pidgey.jpeg",
	"../assets/jogo/pikachu.jpeg",
	"../assets/jogo/geodude.jpeg",
	"../assets/jogo/ekans.jpeg",
	"../assets/jogo/charmander.jpeg",
	"../assets/jogo/bulbasaur.png",
];

const cardList = [
	"../assets/jogo/ratata.jpeg",
	"../assets/jogo/fletchling.jpeg",
	"../assets/jogo/pidgey.jpeg",
	"../assets/jogo/pikachu.jpeg",
	"../assets/jogo/geodude.jpeg",
	"../assets/jogo/ekans.jpeg",
	"../assets/jogo/charmander.jpeg",
	"../assets/jogo/bulbasaur.png",
	"../assets/jogo/ratata.jpeg",
	"../assets/jogo/fletchling.jpeg",
	"../assets/jogo/pidgey.jpeg",
	"../assets/jogo/pikachu.jpeg",
	"../assets/jogo/geodude.jpeg",
	"../assets/jogo/ekans.jpeg",
	"../assets/jogo/charmander.jpeg",
	"../assets/jogo/bulbasaur.png",
];

let firstCard;
let secondCard;
let gridBloqueado = false;
let score = 0;
let matchSpree = 0;
const geraNumAleatorio = (limite) => {
	return Math.floor(Math.random() * limite);
};

const embaralhaCartas = (list) => {
	//algoritmo de fisher-yates
	const listCopy = [...list];
	const size = listCopy.length;
	for (let i = size - 1; i > 0; i--) {
		const j = geraNumAleatorio(i + 1);
		[listCopy[i], listCopy[j]] = [listCopy[j], listCopy[i]];
	}

	return listCopy;
};

const createGridItem = (source) => {
	return `
    <div class="imagem-container">
        <div class="imagem-frente">
            <img src="../assets/jogo/carta-virada.jpeg" alt=''>
        </div>

        <div class="imagem-costa">
            <img src='${source}' alt=''>
        </div>
    </div>
    `;
};

const popularGrid = () => {
	mainGrid.innerHTML = "";
	shuffledCardList = embaralhaCartas(cardList);
	for (let i = 0; i < shuffledCardList.length; i++) {
		const cardItem = document.createElement("div");

		cardItem.classList.add("grid-item");
		cardItem.setAttribute("card-src", shuffledCardList[i]);
		cardItem.innerHTML = createGridItem(shuffledCardList[i]);
		cardItem.addEventListener("click", flipCard);
		mainGrid.appendChild(cardItem);
	}
};

const restartGame = () => {
	window.location.reload();
};

window.onload = popularGrid();

botaoRecomecar.addEventListener("click", restartGame);

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
	this.classList.add("virada");

	if (!firstCard) {
		firstCard = this;
		return;
	}

	secondCard = this;
	gridBloqueado = true;
	buscamatch();
}

const buscamatch = () => {
	const isMatch =
		firstCard.getAttribute("card-src") === secondCard.getAttribute("card-src");
	// isMatch ? disablecards() : unflipCards();
	if (isMatch === true) {
		matchSpree++;
		score = score + matchSpree * 10;
		scoreSpan.innerHTML = score;
		disablecards();
	} else {
		matchSpree = 0;
		unflipCards();
	}
};

const disablecards = () => {
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);

	resetBoard();
};

const unflipCards = () => {
	setTimeout(() => {
		firstCard.classList.remove("virada");
		secondCard.classList.remove("virada");
		resetBoard();
	}, 1000);
};

const resetBoard = () => {
	firstCard = null;
	secondCard = null;
	gridBloqueado = false;
};

const checkIfGameIsOver = () => {
	const cardItems = document.querySelectorAll(".grid-item");
	let numeroDeCartasViradas = 0;
	for (const cardItem of cardItems) {
		if (cardItem.classList.contains("virada")) {
			numeroDeCartasViradas++;
		}
	}

	if (numeroDeCartasViradas === 15) {
		return true;
	}

	return false;
};

const gameOver = () => {
	alert(`game over. pontuação: ${score}`);

	const scoresInfo = localStorage.getItem("scores");
	const scores = scoresInfo ? JSON.parse(scoresInfo) : [];

	const currentUsername = currentUser["nome-completo"];

	currentScore = {
		nome: currentUsername,
		score: score,
	};

	const currentUserIndex = scores.findIndex((scoreRecord) => {
		return scoreRecord.nome === currentScore.nome;
	});

	if (currentUserIndex === -1) {
		scores.push(currentScore);
	} else if (scores[currentUserIndex].score < currentScore.score) {
		scores[currentUserIndex].score = currentScore.score;
	}

	localStorage.setItem("scores", JSON.stringify(scores));
	restartGame();
};
