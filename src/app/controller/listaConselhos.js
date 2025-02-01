import { api } from "../services/backend.js";

async function listaConselhos() {
  try {
    const conselhoLista = document.getElementById("main__lista");
    const userId = localStorage.getItem("userId");
    const response = await api.get(`/users/${userId}/frases`);
    if (response.status === 200) {
      const frases = response.data.data;

      for (const [key, texto] of Object.entries(frases)) {
        const novoConselho = document.createElement("li");
        novoConselho.classList.add("main__lista-item");
        novoConselho.id = key; // Aqui você pode usar o key como o id do item
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
      }
    }
  } catch (error) {
    console.error("Erro ao buscar conselho:", error);
    return null; // Retorna null em caso de erro
  }
}

export const listaConselhosController = { listaConselhos };
