let btnMenu = document.querySelector(".btn_menu")
btnMenu.addEventListener("click", agregarClase);



function agregarClase() {
    document.querySelector(".navegador").classList.toggle("show");
}
