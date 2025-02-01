const botaoLogin = document.querySelector(".button__login");
botaoLogin.addEventListener("click", () => {
  const autenticado = true;
  if (autenticado) {
    window.location.href = "src/screens/home.html";
  } else {
    alert("Usuário ou senha inválidos");
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
