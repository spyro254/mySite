function toggleNav() {
  clicked = document.getElementById("_togglenav").parentElement;
  po = document.getElementById("_page-overlay");
  if (clicked.classList.contains("btm-nav--open")) {
    clicked.classList.remove("btm-nav--open");
    clicked.classList.add("btm-nav--closed");
    po.classList.remove("page-overlay--show");
    po.classList.add("page-overlay--hide");
  }
  else if (clicked.classList.contains("btm-nav--closed")){
    clicked.classList.remove("btm-nav--closed");
    clicked.classList.add("btm-nav--open");
    po.classList.remove("page-overlay--hide");
    po.classList.add("page-overlay--show");
  }
  else {
    clicked.classList.remove("btm-nav--closed");
    clicked.classList.add("btm-nav--open");
    po.classList.remove("page-overlay--hide");
    po.classList.add("page-overlay--show");
  }
}

// function scrollHeader() {
//   h = document.getElementById("_heading");
//   p = document.getElementById("_page");
//    if (window.scrollY > 30) {
//     h.classList.remove("heading--large");
//     h.classList.add("heading--small");
//     return false;
//    }
//    else if (window.scrollY < 31) {
//      h.classList.remove("heading--small");
//      h.classList.add("heading--large");
//      return false;
//    }
// }
