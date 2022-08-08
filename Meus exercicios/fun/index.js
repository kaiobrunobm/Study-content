const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Abrir barra lateral
menuBtn.addEventListener("click", function () {
  sideMenu.style.display = "block";
});
// fechar barra lateral
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
// Mudar o tema
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    // themeToggler.querySelector('span').classList.toggle('active');

})