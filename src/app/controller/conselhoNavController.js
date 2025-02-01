function menuNav() {
  // Seleção de elementos
  const menu = document.querySelector(".menu__botao");
  const menuLista = document.querySelector(".menu__lista");
  const menuImagem = menu.querySelector("img");
  const main = document.querySelector("main");
  const menuPerfil = document.querySelector(".menu__botao-usuario");
  const logout = document.querySelector(".logout");
  const botaoLogout = document.querySelector(".logout");

  // Inicializando a transição da imagem do menu
  menuImagem.style.transition = "transform 0.3s ease-out";

  // Alterna visibilidade do menu de logout ao clicar no perfil
  menuPerfil.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede que o clique no menu de logout feche o menu

    if (logout.style.visibility === "visible") {
      logout.style.visibility = "hidden";
      logout.style.transform = "translateY(100%)"; // Esconde com efeito
    } else {
      logout.style.visibility = "visible";
      logout.style.transform = "translateY(0%)"; // Exibe com efeito
    }
  });

  // Redireciona ao clicar no botão de logout
  botaoLogout.addEventListener("click", () => {
    window.location.href = "/index.html";
  });

  // Abre ou fecha o menu de navegação ao clicar no botão de menu
  menu.addEventListener("click", () => {
    const isExpanded = menuLista.classList.toggle("ativo");
    menuLista.setAttribute("aria-expanded", isExpanded);

    if (isExpanded) {
      menuImagem.style.transform = "scale(1.2, 1.5)";
      main.style.opacity = 0.5;
    } else {
      menuImagem.style.transform = "scale(1, 1)";
      main.style.opacity = 1;
    }
  });

  // Fecha o menu de logout se clicar fora
  document.addEventListener("click", () => {
    logout.style.visibility = "hidden";
    logout.style.transform = "translateY(100%)"; // Esconde com efeito
  });
}

export const conselhoNavController = {
  menuNav,
};
