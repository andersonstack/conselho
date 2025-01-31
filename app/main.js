import { conselhoNavController } from "./controller/conselhoNavController.js";
import { conselhoController } from "./controller/conselhoController.js";
import { conselhoService } from "./services/conselhoApi.js";

const api = await conselhoService.conselhoAPI();

if (api) {
  const textoAPI = api.slip.advice;
  const textoID = api.slip.id;

  const mainConselho = document.getElementById("cartao__texto");
  mainConselho.textContent = textoAPI;

  var typewriter = new Typewriter(mainConselho, {
    loop: false,
    delay: 75,
  });

  typewriter.typeString(textoAPI).start();

  conselhoNavController.menuNav();

  const bookmark = document.getElementById("botao__bookmark");

  bookmark.addEventListener("click", () =>
    conselhoController.salvarConselho(textoAPI, textoID)
  );
}
