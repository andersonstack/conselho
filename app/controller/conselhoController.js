function removerConselho() {
  const conselhoLista = document.getElementById("main__lista");

  conselhoLista.addEventListener("click", (evento) => {
    evento.preventDefault();

    const botaoRemover = evento.target.closest(".botao-remover");
    if (botaoRemover) {
      const li = botaoRemover.closest("li");
      if (li) {
        li.remove();
      }
    }
  });
}

function verConselho() {
  const conselhoLista = document.getElementById("main__lista");

  conselhoLista.addEventListener("click", (evento) => {
    evento.preventDefault();

    const botaoVisualizar = evento.target.closest(".botao-visualizar");

    if (botaoVisualizar) {
      const texto = botaoVisualizar.closest("li").textContent;
      const popup = document.getElementById("popup");

      const paragrafoExistente = popup.querySelector("p");
      if (paragrafoExistente) {
        paragrafoExistente.remove();
      }

      const novoParagrafo = document.createElement("p");
      novoParagrafo.textContent = texto;
      novoParagrafo.classList.add("popup__texto");
      popup.appendChild(novoParagrafo);

      popup.style.visibility = "visible";
      popup.style.transform = "translateY(0%)";

      const main = document.querySelector("main");
      main.style.opacity = "0.5";

      const botaoFechar = popup.querySelector("img");
      botaoFechar.addEventListener("click", () => {
        popup.style.visibility = "hidden";
        popup.style.transform = "translateY(-100%)";
        const main = document.querySelector("main");
        main.style.opacity = "1";
      });
    }
  });
}

function salvarConselho(texto, id) {
  const botaoBookmark = document.getElementById("botao__bookmark");
  const conselhoLista = document.getElementById("main__lista");
  const img = botaoBookmark.querySelector("img");

  // Verifica se o conselho já foi salvo
  const isSaved = botaoBookmark.classList.contains("bookmark-salvo");

  // Alterna a imagem do botão de bookmark
  img.src = isSaved ? "assets/selo.png" : "assets/selo-salvo.png";

  if (!isSaved) {
    botaoBookmark.classList.add("bookmark-salvo");
    const novoConselho = document.createElement("li");
    novoConselho.classList.add("main__lista-item");
    novoConselho.id = id;
    novoConselho.dataset.listaItem = "";
    novoConselho.innerHTML = `
  ${texto}
  <button class="main__lista-item-botao botao-visualizar">
    <img src="assets/icons-black/eye-black.svg" alt="Ver conselho" />
  </button>
  <button class="main__lista-item-botao botao-remover">
    <img src="assets/icons-black/remove-black.svg" alt="Remover conselho" />
  </button>
`;
    conselhoLista.appendChild(novoConselho);

    removerConselho();
    verConselho();
  } else {
    botaoBookmark.classList.remove("bookmark-salvo");
  }
}

// Exporta o controlador de conselho
export const conselhoController = { salvarConselho };
