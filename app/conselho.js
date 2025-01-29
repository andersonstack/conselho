function salvarConselho(texto) {
  const botaoBookmark = document.getElementById("botao__bookmark");
  const conselhoLista = document.getElementById("main__lista");
  console.log(texto);

  botaoBookmark.addEventListener("click", () => {
    const img = botaoBookmark.querySelector("img");

    img.src = img.src.includes("bookmark-save.svg")
      ? "assets/icons-black/bookmark-black.svg"
      : "assets/bookmark-save.svg";

    if (img.src.includes("bookmark-save.svg")) {
      botaoBookmark.classList.add("bookmark-salvo");
      const novoConselho = document.createElement("li");
      novoConselho.innerHTML += `
        <li class="main__lista-item" id="main__lista-item" data-lista-item>
            ${texto}
            <button
              class="main__lista-item-botao"
              id="botao-ver"
              aria-label="Botão de visualizar conselho"
            >
              <img src="assets/icons-black/eye-black.svg" alt="Ver conselho" />
            </button>
            <button
              class="main__lista-item-botao"
              id="botao-remover"
              aria-label="Botão de remover conselho"
            >
              <img
                src="assets/icons-black/remove-black.svg"
                alt="Remover conselho"
              />
            </button>
        </li>`;
      conselhoLista.appendChild(novoConselho);
    } else {
      botaoBookmark.classList.remove("bookmark-salvo");
    }
  });
}

export const conselhoController = { salvarConselho };
