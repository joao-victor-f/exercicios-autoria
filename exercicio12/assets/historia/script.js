const historiaContainer = document.querySelector('#historia-container');
const historiaParagraph = document.querySelector('#historia');

const greetingsTitle = document.querySelector('#greetings');

const logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
    localStorage.setItem("currentUserInfo", JSON.stringify({}));
});

const currentUserInfo = localStorage.getItem("currentUserInfo");
const currentUser = currentUserInfo ? JSON.parse(currentUserInfo) : {};

console.log(currentUser)

if (Object.keys(currentUser).length === 0) {
    document.body.style.display = "none";
    window.location.href = "/exercicio12/src/login.html";
}

const historia = `
    Olá, meu nome é ${currentUser["nome-completo"]}, mas todo mundo me chama de ${currentUser["apelido"]}. Tenho ${currentUser["idade"]} anos e uma das minhas músicas favoritas é "${currentUser["musica-favorita"]}".
    Adoro a cor ${currentUser["cor-favorita"]} e meu prato favorito é ${currentUser["comida-favorita"]}. Sempre que posso, assisto a "${currentUser["filme-serie-anime"]}" ao lado do meu melhor amigo, ${currentUser["melhor-amigo"]}.
    Sonho em viajar para o ${currentUser["lugar-visitado"]} com ${currentUser["melhor-amigo"]}, que é uma grande inspiração na minha vida.
    Uma das coisas mais loucas que quero fazer é ${currentUser["coisa-louca"]} e sempre sonhei em ter ${currentUser["sonho"]}.
    Estou estudando para ser ${currentUser["profissao-futura"]} e meu objetivo é trabalhar em ${currentUser["local-trabalho"]}.
    Se eu pudesse desfazer algo, seria ${currentUser["desfazer-refazer"]}, e, não ter conhecido ${currentUser["nao-suporta"]}.
`;

historiaParagraph.innerHTML = historia;
greetingsTitle.innerHTML = currentUser.apelido;