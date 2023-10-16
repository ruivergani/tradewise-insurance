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
// Mobile Menu Dropdown
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
// Menu Dropdown Desktop
const buttonDrodpdownDesktop = document.querySelectorAll(".js-btn-menu");
const menuDropdownDesktopArea = document.querySelectorAll(".nav__dropdown__menu__item");
const fadeOverlay = document.getElementById("js-fade-overlay");
if(buttonDrodpdownDesktop && menuDropdownDesktopArea.length > 0){
  buttonDrodpdownDesktop.forEach((button, index) => {
    button.addEventListener("mouseenter", (event) => {
      event.preventDefault();
      // Remove from all active class
      menuDropdownDesktopArea.forEach((itemMenu) => {
        itemMenu.classList.remove("is-active");
        itemMenu.addEventListener("mouseleave", () => {
          itemMenu.classList.remove("is-active");
          fadeOverlay.style.opacity = 0;
          buttonDrodpdownDesktop.forEach((itemBtn) => {
            itemBtn.classList.remove("is-active");
          });
        });
      });
      // Remove active from all buttons
      buttonDrodpdownDesktop.forEach((itemBtn) => {
        itemBtn.classList.remove("is-active");
      })
      // Add active class to button
      button.classList.add("is-active");
      // Add active class to dropdown area
      menuDropdownDesktopArea[index].classList.add("is-active");
      // Add fade overlay effect
      fadeOverlay.style.opacity = 1;
      fadeOverlay.style.pointerEvents = "none";
    })
  })
}