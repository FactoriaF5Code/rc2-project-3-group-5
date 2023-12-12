const customCursor = document.createElement("div");
customCursor.id = "customCursor";
document.body.appendChild(customCursor);

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.pageX - 20 + "px";
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

function tocarCuerda(cuerda) {
  const sonido = document.getElementById(`sonidoCuerda${cuerda}`);
  sonido.currentTime = 0; // Reiniciar la reproducción si ya se estaba reproduciendo
  sonido.play();
}




