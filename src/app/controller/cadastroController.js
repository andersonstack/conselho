import { api } from "../services/backend.js";

const botaoPOST = document.querySelector("#button__post");
botaoPOST.addEventListener("click", async () => {
  await api
    .post("/users", {
      userName: document.querySelector("#nome").value,
      name: document.querySelector("#nome_usuario").value,
      senha: document.querySelector("#senha").value,
      frases: {},
    })
    .then((response) => {
      if (response.status === 201) {
        window.location.href = "../../index.html";
      } else {
        alert("Erro ao cadastrar usuário");
      }
    });
});
