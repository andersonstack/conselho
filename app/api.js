export async function conselhoAPI() {
  const conselho = await fetch("https://api.adviceslip.com/advice");
  const conselhoObjeto = await conselho.json();
  return conselhoObjeto;
}
