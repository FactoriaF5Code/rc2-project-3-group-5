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
}

let interruptor = document.querySelector(".btn");
let cuerpo = document.querySelector("body");
let sonido = document.getElementById("audio");

let cambioElectrica = document.getElementById("electrica");
let cambioAcustica = document.getElementById("acustica");

let interruptorPulsado = true;

interruptor.onclick = function encender() {
  cuerpo.classList.toggle("on");
  interruptorPulsado = !interruptorPulsado;
  console.log(interruptorPulsado);
  if (cambioAcustica.style.display == "none") {
    cambioAcustica.style.display = "block";
    cambioElectrica.style.display = "none";
  } else {
    cambioAcustica.style.display = "none";
    cambioElectrica.style.display = "block";
  }
};

function tocarCuerda(cuerda) {
  if (interruptorPulsado) {
    const sonidoCuerda = document.getElementById(`sonidoCuerda${cuerda}`);
    sonidoCuerda.currentTime = 0;
    sonidoCuerda.play();
  } else {
    const sonidoCuerdaElectrica = document.getElementById(
      `sonidoCuerda${cuerda + 6}`
    );
    sonidoCuerdaElectrica.currentTime = 0;
    sonidoCuerdaElectrica.play();
  }
}
