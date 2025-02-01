import { conselhoNavController } from "./controller/conselhoNavController.js";
import { conselhoController } from "./controller/conselhoController.js";
import { conselhoService } from "./services/conselhoApi.js";
import { listaConselhosController } from "./controller/listaConselhos.js";

const apiConselho = await conselhoService.conselhoAPI();

if (apiConselho) {
  const textoAPI = apiConselho.slip.advice;
  const textoID = apiConselho.slip.id;

  const mainConselho = document.getElementById("cartao__texto");
  mainConselho.textContent = textoAPI;

  var typewriter = new Typewriter(mainConselho, {
    loop: false,
    delay: 75,
  });

  typewriter.typeString(textoAPI).start();

  conselhoNavController.menuNav();

  const bookmark = document.getElementById("botao__bookmark");

  listaConselhosController.listaConselhos();
  bookmark.addEventListener("click", () =>
    conselhoController.salvarConselho(textoAPI, textoID)
  );
}
