import { api } from "../services/backend.js";

const botaoPOST = document.querySelector("#button__post");

botaoPOST.addEventListener("click", async () => {
  try {
    const response = await api.post("/users", {
      userName: document.querySelector("#nome").value,
      name: document.querySelector("#nome_usuario").value,
      senha: document.querySelector("#senha").value,
      frases: {},
    });

    // Verificando a resposta bem-sucedida
    if (response.status === 201) {
      window.location.href = "sucesso.html";
    } else if (response.status === 504) {
      // Caso o erro de usuário já existente
      window.location.href = "erro.html";
    }
  } catch (error) {
    // Captura qualquer erro de rede ou outros problemas
    console.error("Erro ao realizar o cadastro:", error);
    window.location.href = "erro.html"; // Redireciona para a página de erro
  }
});
