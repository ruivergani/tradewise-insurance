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
    document.documentElement.classList.toggle("opened-menu");
  });
}
const dropdownButtonMobileMenuItem = document.querySelectorAll(".js-mobile-menu-item");
const dropdownAreaMobileMenu = document.querySelectorAll(".js-menu-dropdown-mobile");
if(dropdownButtonMobileMenuItem && dropdownAreaMobileMenu){
  dropdownButtonMobileMenuItem.forEach((button, index) => {
    // Add click event to each button mobile menu dropdown
    button.addEventListener("click", (event) => {
      // Prevent default behavior tag a
      event.preventDefault();
      // add is-active class to the button
      button.classList.toggle("is-active");
      // open dropdown area to show submenu
      dropdownAreaMobileMenu[index].classList.toggle("is-active");
    })
  })
}