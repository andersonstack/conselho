import { menuNav } from "./menu.js";
import { conselhoAPI } from "./api.js";
import salvarConselho from "./conselho.js";
const api = await conselhoAPI();
const textoAPI = api.slip.advice;

const mainConselho = document.getElementById("cartao__texto");
mainConselho.textContent = textoAPI;

menuNav();
salvarConselho(textoAPI);
