import { menuNav } from "./menu.js";
import { conselhoAPI } from "./api.js";
const api = await conselhoAPI();
console.log(api);
menuNav();
