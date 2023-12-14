const customCursor = document.createElement("div");
customCursor.id = "customCursor";
document.body.appendChild(customCursor);

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.pageX - 21 + "px";
  customCursor.style.top = e.pageY - 131 + "px";
});


function abrirMenu() {
  let contenedorInstrumentos = document.getElementById("menuHamburguesa");

  if (contenedorInstrumentos.style.opacity == "0") {
    contenedorInstrumentos.style.opacity = "0.9";
  } else {
    contenedorInstrumentos.style.opacity = "0";
  }
};

let interruptor = document.querySelector(".btn");
let cuerpo = document.querySelector("body");
let sonido = document.getElementById("audio");

let interruptorPulsado = false;

interruptor.onclick = function encender() {
    cuerpo.classList.toggle("on");
    interruptorPulsado = !interruptorPulsado;
    console.log(interruptorPulsado);

    if (interruptorPulsado) {
        // Las cuerdas se tocarán al pasar el ratón sobre ellas (onmouseenter)
    } else {
        // Detener la reproducción de las cuerdas si el interruptor está en false
        for (let cuerda = 1; cuerda <= 6; cuerda++) {
            const sonidoCuerda = document.getElementById(`sonidoCuerda${cuerda}`);
            sonidoCuerda.pause();
            sonidoCuerda.currentTime = 0;
        }
    }
};

function tocarCuerda(cuerda) {
    if (interruptorPulsado) {
        const sonidoCuerda = document.getElementById(`sonidoCuerda${cuerda}`);
        sonidoCuerda.currentTime = 0;
        sonidoCuerda.play();
    }
}


