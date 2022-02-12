const botones = document.querySelectorAll("[data-carrusel-boton]")

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const offset = boton.dataset.carruselBoton === "next" ? 1 : -1
    const slides = boton
      .closest("[data-carrusel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide)+ offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const encuesta = document.getElementById("contactForm");
const nombreUsuario = document.getElementById("nombreUsuario");
const mailUsuario = document.getElementById("mailUsuario");
const mensajeUsuario = document.getElementById("mensajeUsuario");

encuesta.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreUsuarioValor = nombreUsuario.Value;
    const mailUsuarioValor = mailUsuario.Value;
    const mensajeUsuarioValor = mensajeUsuario.Value;

    if(!nombreUsuarioValor || !mailUsuarioValor || !mensajeUsuarioValor){
        alert("Por favor llene el formulario");
        return;
    }else{
        alert("Gracias por compartir tu opinion!")
    }

    console.log(nombreUsuarioValor, mailUsuarioValor, mensajeUsuarioValor);
})
