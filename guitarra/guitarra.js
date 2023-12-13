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

interruptor.onclick = function encender(){
    cuerpo.classList.toggle("on");
    sonido.play();
    interruptorPulsado = !interruptorPulsado;
    console.log(interruptorPulsado)
};

function tocarCuerda(cuerda) {
  const sonido = document.getElementById(`sonidoCuerda${cuerda}`);
  sonido.currentTime = 0; 
  sonido.play();
}




