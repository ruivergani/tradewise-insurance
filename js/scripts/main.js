// Button Scroll Top
const btnScrollTop = document.getElementById("js-btn-scroll-top");
if(btnScrollTop){
  btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
// Button Menu Hamburguer Effect
const btnMobileMenu = document.getElementById("js-btn-menu");
if(btnMobileMenu){
  btnMobileMenu.addEventListener("click", () => {
    btnMobileMenu.classList.toggle("is-active");
    document.documentElement.classList.toggle("menuOpened");
  });
}
