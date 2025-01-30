import { menuNav } from "./menu.js";
import { conselhoAPI } from "./api.js";
import { conselhoController } from "./conselho.js";

const api = await conselhoAPI();

if (api) {
  const textoAPI = api.slip.advice;
  const textoID = api.slip.id;

  const mainConselho = document.getElementById("cartao__texto");
  mainConselho.textContent = textoAPI;

  var typewriter = new Typewriter(mainConselho, {
    loop: true,
    delay: 75,
  });

  typewriter
    .typeString(textoAPI)
    .pauseFor(2500)
    .deleteAll()
    .typeString(textoAPI)
    .start();

  menuNav();

  const bookmark = document.getElementById("botao__bookmark");

  bookmark.addEventListener("click", () =>
    conselhoController.salvarConselho(textoAPI, textoID)
  );
}
