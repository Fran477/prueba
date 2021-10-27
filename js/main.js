let btnEnviar = document.getElementById("enviar-form");
let inputCaptcha = document.getElementById("captcha"); 
let correcto = document.getElementById("resultado");
let incorrecto = document.getElementById("resultado");

//Este es el evento que se ejecuta con el boton
btnEnviar.addEventListener("click", Verificar)

//Con esta funcion verifico el captcha
 function Verificar()
 {
    //el valor del captcha tiene que ser 54325
  if (inputCaptcha.value == 54325) {
    correcto.innerText = "Su mensaje fue enviado con exito ¡Gracias por contactarnos!";
  
  } 
  
  else {
    //el valor de captch es distinto a 54325
    incorrecto.innerText = "*el captcha fue incorrecto ¡Vuelve a Intentarlo!";
  }
  //vuelve blanco el campo de imput cuando se toca enviar
  inputCaptcha.value = "";
 
};


let btnMenu = document.querySelector(".btn_menu")
btnMenu.addEventListener("click", agregarClase);



function agregarClase() {
    document.querySelector(".navegador").classList.toggle("show");
}
