import { menuNav } from "./menu.js";
import { conselhoAPI } from "./api.js";
import { conselhoController } from "./conselho.js";

const api = await conselhoAPI();
const textoAPI = api.slip.advice;
const textoID = api.slip.id;

const mainConselho = document.getElementById("cartao__texto");
mainConselho.textContent = textoAPI;

menuNav();

const bookmark = document.getElementById("botao__bookmark");

bookmark.addEventListener("click", () =>
  conselhoController.salvarConselho(textoAPI, textoID)
);
