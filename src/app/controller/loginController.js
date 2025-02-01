const botaoLogin = document.querySelector(".button__login");
const paragrafoError = document.querySelector(".aviso__login");

botaoLogin.addEventListener("click", () => {
  const autenticado = false;
  if (autenticado) {
    window.location.href = "src/screens/home.html";
  } else {
    paragrafoError.style.display = "block";
  }
});
const botaoCadastrar = document.querySelector(".button__sigup");
botaoCadastrar.addEventListener("click", () => {
  window.location.href = "src/screens/cadastro.html";
});
const botaoEsqueci = document.querySelector(".button__forget");
botaoEsqueci.addEventListener("click", () => {
  console.log("fui clicado");
});
