
function toggleBurger() {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('nav-menu');
    burgerIcon.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
    console.log("click");
  }
