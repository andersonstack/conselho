const botaoPOST = document.querySelector("#button__post");
botaoPOST.addEventListener("click", () => {
  console.log("fui clicado");
});
const botaoVoltar = document.querySelector(".button__back");
botaoVoltar.addEventListener("click", () => {
  window.location.href = "../screens/login.html";
});
