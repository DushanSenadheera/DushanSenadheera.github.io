const showNav = document.getElementById("mobileLinks");
showNav.addEventListener("click", mobileMenu);

function mobileMenu() {
   document.getElementById('menu-logo').classList.toggle('mobileNav');
}

