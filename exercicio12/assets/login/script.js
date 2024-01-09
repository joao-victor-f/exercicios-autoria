const formulario = document.querySelector("#form-questionario");
const formularioInputs = formulario.getElementsByTagName("input");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let valores = {};
  const usersInfo = localStorage.getItem("usuarios");
  const users = usersInfo ? JSON.parse(usersInfo) : [];

  for (const input of formularioInputs) {
    if (input.value.trim() === "") {
      alert("Todos os inputs devem ser preenchidos!");
      valores = {};
      break;
    }

    valores[input.name] = input.value;
  }

  if (!(valores === {})) {
    localStorage.setItem(valores["nome-completo"], JSON.stringify(valores));
    localStorage.setItem("currentUserInfo", JSON.stringify(valores));
    users.push(valores);

    localStorage.setItem("usuarios", JSON.stringify(users));
  }

  window.location.href = "/exercicio12/src/historia.html";
});
