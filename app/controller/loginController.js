const botaoLogin = document.querySelector(".button__login");
botaoLogin.addEventListener("click", () => {
  const autenticado = true;
  if (autenticado) {
    window.location.href = "../../index.html";
  } else {
    alert("Usuário ou senha inválidos");
  }
});
const botaoCadastrar = document.querySelector(".button__sigup");
botaoCadastrar.addEventListener("click", () => {
  window.location.href = "../screens/cadastro.html";
});
const botaoEsqueci = document.querySelector(".button__forget");
botaoEsqueci.addEventListener("click", () => {
  console.log("fui clicado");
});
