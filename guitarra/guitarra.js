const customCursor = document.createElement("div");
customCursor.id = "customCursor";
document.body.appendChild(customCursor);

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.pageX - 25 + "px";
  customCursor.style.top = e.pageY - 25 + "px";
});


function abrirMenu() {
  let contenedorInstrumentos = document.getElementById("menuHamburguesa");

  if (contenedorInstrumentos.style.opacity == "0") {
    contenedorInstrumentos.style.opacity = "0.9";
  } else {
    contenedorInstrumentos.style.opacity = "0";
  }
}


