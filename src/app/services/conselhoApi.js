async function traduzirTexto(texto) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyC49W9VxHaxiPJ2m7GLrpMC0eO8d8Vhe8I`;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      q: texto,
      target: "pt", // Código do idioma para português
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data.data.translations[0].translatedText;
}

async function conselhoAPI() {
  try {
    const conselho = await fetch("https://api.adviceslip.com/advice");
    const conselhoObjeto = await conselho.json();
    return conselhoObjeto;
  } catch (error) {
    console.error("Erro ao buscar conselho:", error);
    return null; // Retorna null em caso de erro
  }
}

export const conselhoService = {
  conselhoAPI,
  traduzirTexto,
};
