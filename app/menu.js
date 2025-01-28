export function menuNav() {
  const menu = document.querySelector(".menu__botao");
  const menuLista = document.querySelector(".menu__lista");
  const menuImagem = menu.querySelector("img");
  const main = document.querySelector("main");

  menu.addEventListener("click", () => {
    const isExpanded = menuLista.classList.toggle("ativo");
    menuLista.setAttribute("aria-expanded", isExpanded);

    if (isExpanded) {
      menuImagem.src = "assets/icons-black/menu-black-open.svg";
      main.style.opacity = 0.5;
    } else {
      menuImagem.src = "assets/icons-black/menu-black-close.svg";
      main.style.opacity = 1;
    }
  });
}
