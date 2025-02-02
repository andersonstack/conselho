import { conselhoController } from "./conselhoController.js";
import { api } from "../services/backend.js";

async function listaConselhos() {
  try {
    const conselhoLista = document.getElementById("main__lista");
    const userId = localStorage.getItem("userId");
    const response = await api.get(`/users/${userId}/frases`);
    if (response.status === 200) {
      const frases = response.data.data;

      // Limpar a lista antes de adicionar os novos itens
      conselhoLista.innerHTML = "";

      // Iterar diretamente sobre a lista de frases
      for (const frase of frases) {
        const novoConselho = document.createElement("li");
        novoConselho.classList.add("main__lista-item");
        novoConselho.dataset.listaItem = "";

        novoConselho.innerHTML = `
          ${frase.fraseValue}
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
      }

      // Delegação de eventos para os botões dentro do contêiner
      conselhoLista.addEventListener("click", (event) => {
        if (event.target.closest(".botao-visualizar")) {
          conselhoController.verConselho();
        }

        if (event.target.closest(".botao-remover")) {
          conselhoController.removerConselho();
        }
      });
    }
  } catch (error) {
    console.error("Erro ao buscar conselho:", error);
    return null;
  }
}

export const listaConselhosController = { listaConselhos };
