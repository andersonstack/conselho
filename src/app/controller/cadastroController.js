import { api } from "../services/backend.js";

const botaoPOST = document.querySelector("#button__post");
const senha = document.querySelector("#senha");
const avisoSenha = document.querySelector(".senha__invalida");

// Verifica a senha a cada mudança no campo de senha
senha.addEventListener("input", () => {
  const senhaValue = senha.value;
  const regex = /^[a-zA-Z0-9]+$/;

  // Se a senha for inválida, exibe o aviso
  if (!regex.test(senhaValue)) {
    avisoSenha.style.display = "block";
  } else {
    avisoSenha.style.display = "none"; // Caso a senha seja válida, esconde o aviso
  }
});

botaoPOST.addEventListener("click", async (event) => {
  event.preventDefault();
  const senhaValue = senha.value;
  const regex = /^[a-zA-Z0-9]+$/; // Alterado para permitir números

  // Verifica novamente a senha ao tentar enviar o formulário
  if (!regex.test(senhaValue)) {
    avisoSenha.style.display = "block"; // Exibe o aviso novamente se a senha for inválida
  } else {
    avisoSenha.style.display = "none"; // Esconde o aviso se a senha for válida

    try {
      const response = await api.post("/users", {
        userName: document.querySelector("#nome").value,
        name: document.querySelector("#nome_usuario").value,
        senha: senhaValue,
        frases: {},
      });

      // Verificando a resposta bem-sucedida
      if (response.status === 201) {
        window.location.href = "./sucesso.html";
      } else if (response.status === 504) {
        window.location.href = "./erro.html";
      }
    } catch (error) {
      // Captura qualquer erro de rede ou outros problemas
      console.error("Erro ao realizar o cadastro:", error);
      window.location.href = "./erro.html"; // Redireciona para a página de erro
    }
  }
});
