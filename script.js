const menu = document.getElementById("menu-logo")
menu.addEventListener("click", mobileMenu)

function mobileMenu() {
   document.getElementById('mobileLinks').classList.toggle('active')
}

