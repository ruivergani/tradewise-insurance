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

// Configure tab navigation based on scroll
const navLi = document.querySelectorAll(".js-nav-product li a");
const sections = document.querySelectorAll("section");
if (navLi.length && sections.length) {
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      let sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 160) {
        current = section.getAttribute("id");
      }
    });
    navLi.forEach((li) => {
      li.classList.remove("active");
      const currentLink = document.querySelector(
        '.js-nav-product li a[href*="' + current + '"]'
      );
      if (currentLink) {
        currentLink.classList.add("active");
        //window.location.hash = current;
      }
    });
  });
  // Add click event listeners to the navigation links
  navLi.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default navigation behavior
      let targetId = link.getAttribute("href").substring(1); // Get the target section ID
      let targetSection = document.getElementById(targetId); // Get the target section element

      if (targetSection) {
        let targetOffset = targetSection.offsetTop; // Get the target section's top offset
        window.scrollTo({
          top: targetOffset - 110,
          behavior: "smooth", // Enable smooth scrolling
        });
      }
    });
  });
}
// Script for the mobile tab navigation
const btnDropdownSelect = document.querySelector(".js-open-select-custom");
const dropdownArea = document.querySelector(".select-custom");
const navMobileLink = document.querySelectorAll(".dropdown-select li");
if (btnDropdownSelect) {
  btnDropdownSelect.addEventListener("click", () => {
    dropdownArea.classList.toggle("active");
  });
  navMobileLink.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      navMobileLink.forEach((all) => {
        all.classList.remove("active");
        dropdownArea.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
}
// Custom Select Content Code
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select-content");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element, create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box and the selected item: */
      var y, i, k, s, h, sl, yl, targetId;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          // Get the target ID from the value attribute of the selected option
          targetId = s.options[i].value;
          // Scroll to the corresponding section
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select-content");

function updateSelectedOption(scrollPosition) {
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = x[i].getElementsByClassName("select-selected")[0];
    var sectionTops = [];
    var selectedOptionIndex = -1;

    // Find the top position of each section
    for (var j = 1; j < selElmnt.length; j++) {
      var targetId = selElmnt.options[j].value;
      if (targetId) {
        var targetSection = document.querySelector(targetId);
        if (targetSection) {
          sectionTops.push({
            optionIndex: j,
            sectionTop: targetSection.offsetTop - 160,
            sectionBottom: targetSection.offsetTop + targetSection.clientHeight - 160,
          });
        }
      }
    }
    // Find the section in view
    for (var j = 0; j < sectionTops.length; j++) {
      if (scrollPosition >= sectionTops[j].sectionTop && scrollPosition < sectionTops[j].sectionBottom) {
        selectedOptionIndex = sectionTops[j].optionIndex;
        break;
      }
    }
    // Update the selected option in the select box
    if (selectedOptionIndex !== -1) {
      selElmnt.selectedIndex = selectedOptionIndex;
      a.innerHTML = selElmnt.options[selectedOptionIndex].innerHTML;
    }
  }
}
// Initialize selected options on page load
updateSelectedOption(window.scrollY);
// Listen for the window scroll event
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  updateSelectedOption(scrollPosition);
});