function removerConselho() {
  const botoesRemover = document.querySelectorAll(
    ".main__lista-item-botao.botao-remover"
  );

  botoesRemover.forEach((botao) => {
    botao.addEventListener("click", function () {
      const item = this.closest(".main__lista-item");

      item.classList.add("remover");

      setTimeout(() => {
        item.remove();
      }, 1000);
    });
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
  img.src = isSaved ? "../assets/selo.png" : "../assets/selo-salvo.png";

  if (!isSaved) {
    botaoBookmark.classList.add("bookmark-salvo");
    const novoConselho = document.createElement("li");
    novoConselho.classList.add("main__lista-item");
    novoConselho.id = id;
    novoConselho.dataset.listaItem = "";
    novoConselho.innerHTML = `
  ${texto}
  <button class="main__lista-item-botao botao-visualizar">
    <img src="../assets/eye.svg" alt="Ver conselho" />
  </button>
  <button class="main__lista-item-botao botao-remover">
    <img src="../assets/remove.svg" alt="Remover conselho" />
  </button>
`;
    conselhoLista.appendChild(novoConselho);
    setTimeout(() => {
      novoConselho.classList.add("visivel");
    }, 10);

    removerConselho();
    verConselho();
  } else {
    botaoBookmark.classList.remove("bookmark-salvo");
  }
}

// Exporta o controlador de conselho
export const conselhoController = { salvarConselho };
