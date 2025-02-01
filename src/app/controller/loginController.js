import { api } from "../services/backend.js";

const botaoLogin = document.querySelector(".button__login");
const paragrafoError = document.querySelector(".aviso__login");

botaoLogin.addEventListener("click", (event) => {
  event.preventDefault();
  const username = document.querySelector("#nome_usuario").value;
  const senha = document.querySelector("#senha").value;

  api
    .post("/login", {
      userName: username,
      senha: senha,
    })
    .then((response) => {
      if (response.status === 200) {
        window.location.href = "src/screens/home.html";
      } else if (response.status === 401) {
        paragrafoError.textContent = "Senha inválida.";
        paragrafoError.style.display = "block";
      }
    })
    .catch((error) => {
      console.error("Erro ao realizar login:", error);
      paragrafoError.style.display = "block";
    });
});

const botaoCadastrar = document.querySelector(".button__sigup");
botaoCadastrar.addEventListener("click", () => {
  window.location.href = "src/screens/cadastro.html";
});
const botaoEsqueci = document.querySelector(".button__forget");
botaoEsqueci.addEventListener("click", () => {
  console.log("fui clicado");
});
