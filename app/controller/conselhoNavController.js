function menuNav() {
  const menu = document.querySelector(".menu__botao");
  const menuLista = document.querySelector(".menu__lista");
  const menuImagem = menu.querySelector("img");
  menuImagem.style.transition = "transform 0.3s ease-out";
  const main = document.querySelector("main");
  const menuPerfil = document.querySelector(".menu__botao-usuario");

  menuPerfil.addEventListener("click", () => {
    const logout = document.querySelector(".logout");

    // Alternar entre visível e invisível
    if (logout.style.visibility === "visible") {
      logout.style.visibility = "hidden";
      logout.style.transform = "translateY(100%)"; // Esconde com efeito
    } else {
      logout.style.visibility = "visible";
      logout.style.transform = "translateY(0%)"; // Exibe com efeito
    }
  });

  const botaoLogout = document.querySelector(".logout");
  botaoLogout.addEventListener("click", () => {
    window.location.href = "../screens/login.html";
  });

  menu.addEventListener("click", () => {
    const isExpanded = menuLista.classList.toggle("ativo");
    menuLista.setAttribute("aria-expanded", isExpanded);

    if (isExpanded) {
      menuImagem.style.transform = "scale(1.2, 1.5)";
      main.style.opacity = 0.5;
    } else {
      menuImagem.style.transform = "scale(1, 1)";
      menuImagem.src = "assets/icons-black/menu-black-close.svg";
      main.style.opacity = 1;
    }
  });
}

export const conselhoNavController = {
  menuNav,
};
