import { api } from "../services/backend.js";

function removerConselho() {
  const botoesRemover = document.querySelectorAll(
    ".main__lista-item-botao.botao-remover"
  );

  botoesRemover.forEach((botao) => {
    botao.addEventListener("click", async function () {
      const item = this.closest(".main__lista-item");
      const id = item.id;
      const fraseTexto = item.innerHTML.trim();

      item.classList.add("remover");

      try {
        const userId = localStorage.getItem("userId");
        const response = await api.delete(`/users/${userId}/frases/${id}`);

        if (response.status === 200) {
          setTimeout(() => {
            item.remove();
          }, 1000);
        }

        const botaoBookmark = document.getElementById("botao__bookmark");
        const img = botaoBookmark.querySelector("img");

        if (
          botaoBookmark.classList.contains("bookmark-salvo") &&
          fraseTexto === item.innerHTML.trim()
        ) {
          botaoBookmark.classList.remove("bookmark-salvo");
          img.src = "../assets/selo.png";
        } else {
          console.error("Erro ao remover conselho");
        }
      } catch {
        console.error("Erro ao remover conselho");
      }
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

async function salvarConselho(texto, id) {
  // Definndo variáveis
  const botaoBookmark = document.getElementById("botao__bookmark");
  const conselhoLista = document.getElementById("main__lista");
  const img = botaoBookmark.querySelector("img");
  const userId = localStorage.getItem("userId");

  try {
    const response = await api.put(`/users/${userId}/frases`, {
      fraseKey: id, // Envia a chave da frase
      fraseValue: texto, // Envia o valor da frase
    });

    // Verifica se a resposta foi bem-sucedida
    if (response.status === 200) {
      // Atualiza o estado do botão bookmark
      const isSaved = botaoBookmark.classList.contains("bookmark-salvo");
      img.src = isSaved ? "../assets/selo.png" : "../assets/selo-salvo.png";

      if (!isSaved) {
        botaoBookmark.classList.add("bookmark-salvo");

        // Cria e adiciona o novo conselho à lista
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
      }
    } else {
      console.error(
        "Erro ao salvar conselho:",
        response.data.message || "Erro desconhecido"
      );
    }
  } catch (error) {
    console.error("Erro ao salvar conselho:", error);
  }
}

// Exporta o controlador de conselho
export const conselhoController = { salvarConselho };
