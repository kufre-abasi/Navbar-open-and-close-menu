const navIcon = document.getElementById("nav-icon");
const navItems = document.querySelector(".nav-items");

function toggleNav() {
  navItems.classList.toggle("show-nav");
}

navIcon.addEventListener("click", toggleNav);
