import { menuNav } from "./menu.js";
import { conselhoAPI } from "./api.js";
import salvarConselho from "./conselho.js";
const api = await conselhoAPI();
console.log(api);
menuNav();
salvarConselho(api.slip.advice);
