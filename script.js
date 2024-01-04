const menuBars = document.getElementById("menu-bars");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");

function toggleNav() {
  menuBars.classList.toggle("change");
  navList.classList.toggle("show");
  setNavItemAnimation(navItems);
}

function setNavItemAnimation(itemList) {
  itemList.forEach((item, index) => {
    if (item.classList.contains(`slide-out-${index + 1}`)) {
      item.classList.replace(`slide-out-${index + 1}`, `slide-in-${index + 1}`);
    } else if (item.classList.contains(`slide-in-${index + 1}`)) {
      item.classList.replace(`slide-in-${index + 1}`, `slide-out-${index + 1}`);
    }
  });
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);
navLinks.forEach((link) => {
  link.addEventListener("click", toggleNav);
});
