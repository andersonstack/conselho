import { conselhoNavController } from "./controller/conselhoNavController.js";
import { conselhoController } from "./controller/conselhoController.js";
import { conselhoService } from "./services/conselhoApi.js";
import { listaConselhosController } from "./controller/listaConselhos.js";

const apiConselho = await conselhoService.conselhoAPI();

if (apiConselho) {
  const textoAPI = apiConselho.slip.advice;
  const textoTraduzido = await conselhoService.traduzirTexto(textoAPI);
  console.log(textoTraduzido);
  const textoID = apiConselho.slip.id;

  const mainConselho = document.getElementById("cartao__texto");
  mainConselho.textContent = textoTraduzido;

  var typewriter = new Typewriter(mainConselho, {
    loop: false,
    delay: 75,
  });

  typewriter.typeString(textoTraduzido).start();

  conselhoNavController.menuNav();

  const bookmark = document.getElementById("botao__bookmark");

  listaConselhosController.listaConselhos();
  bookmark.addEventListener("click", () =>
    conselhoController.salvarConselho(textoTraduzido, textoID)
  );
}

const botaoAbout = document.querySelector(".botao__about");
const about = document.querySelector(".about");
const main = document.querySelector("main");

botaoAbout.addEventListener("click", () => {
  console.log("fui clicado");
  // Mostrar a div "about" com a animação
  about.classList.add("show");

  // Diminuir a opacidade do main
  main.style.opacity = "0.5";
});

// Fechar a div ao clicar fora dela
document.addEventListener("click", (e) => {
  if (!about.contains(e.target) && !botaoAbout.contains(e.target)) {
    // Corrigido para 'botaoAbout'
    // Esconder a div "about" e restaurar a opacidade do main
    about.classList.remove("show");
    main.style.opacity = "1";
  }
});
