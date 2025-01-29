export async function conselhoAPI() {
  try {
    const conselho = await fetch("https://api.adviceslip.com/advice");
    const conselhoObjeto = await conselho.json();
    return conselhoObjeto;
  } catch (error) {
    console.error("Erro ao buscar conselho:", error);
    return null; // Retorna null em caso de erro
  }
}
