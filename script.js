const customCursor = document.createElement("div");
customCursor.id = "customCursor";
document.body.appendChild(customCursor);

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.pageX - 18 + "px";
  customCursor.style.top = e.pageY - 18 + "px";
});


function abrirMenu() {
  let contenedorInstrumentos = document.getElementById("menuHamburguesa");

  if (contenedorInstrumentos.style.opacity == "0") {
    contenedorInstrumentos.style.opacity = "0.9";
  } else {
    contenedorInstrumentos.style.opacity = "0";
  }
}


function tocarPlatilloIzquierdoAlto() {
  let platilloIzquierdoAlto = document.getElementById(
    "sonidoPlatilloIzquierdoAlto"
  );
  let sombra = document.getElementById("s");

  sombra.style.boxShadow = "0px 0px 7px 8px rgba(252, 245, 245, 0.5)";

  setTimeout(function () {
    sombra.style.boxShadow = "none";
  }, 200);

  if (platilloIzquierdoAlto.paused) {
    platilloIzquierdoAlto.play();
  } else {
    platilloIzquierdoAlto.currentTime = 0;
  }
  
}

console.log("Reproducción de platillo izquierdo alto finalizada.");

document.addEventListener("keydown", function (event) {
  if (event.key === "s") {
    tocarPlatilloIzquierdoAlto();
  }
});

function tocarPlatilloIzquierdoBajo() {
  let platilloIzquierdoBajo = document.getElementById(
    "sonidoPlatilloIzquierdoBajo"
  );
  let sombra = document.getElementById("d");

  sombra.style.boxShadow = "0px 0px 7px 8px rgba(252, 245, 245, 0.5)";

  setTimeout(function () {
    sombra.style.boxShadow = "none";
  }, 200);

  if (platilloIzquierdoBajo.paused) {
    platilloIzquierdoBajo.play();
  } else {
    platilloIzquierdoBajo.currentTime = 0;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    tocarPlatilloIzquierdoBajo();
  }
});

function tocarPlatilloDerecho() {
  let platilloDerecho = document.getElementById("sonidoPlatilloDerecho");
  let sombra = document.getElementById("l");

  sombra.style.boxShadow = "0px 0px 7px 8px rgba(252, 245, 245, 0.5)";

  setTimeout(function () {
    sombra.style.boxShadow = "none";
  }, 200);

  if (platilloDerecho.paused) {
    platilloDerecho.play();
  } else {
    platilloDerecho.currentTime = 0;
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "l") {
    tocarPlatilloDerecho();
  }
});

function tocarTamborIzquierdo() {
  let tamborIzquierdo = document.getElementById("sonidoTamborIzquierdo");
  let sombra = document.getElementById("f");

  sombra.style.boxShadow = "0px 0px 7px 8px rgba(252, 245, 245, 0.5)";

  setTimeout(function () {
    sombra.style.boxShadow = "none";
  }, 200);

  if (tamborIzquierdo.paused) {
    tamborIzquierdo.play();
  } else {
    tamborIzquierdo.currentTime = 0;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    tocarTamborIzquierdo();
  }
});

function tocarBombo() {
  let tocarBombo = document.getElementById("sonidoBombo");
  let sombra = document.getElementById("h");

  sombra.style.boxShadow = "0px 0px 7px 8px rgba(252, 245, 245, 0.5)";

  setTimeout(function () {
    sombra.style.boxShadow = "none";
  }, 200);

  if (tocarBombo.paused) {
    tocarBombo.play();
  } else {
    tocarBombo.currentTime = 0;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "h") {
    tocarBombo();
  }
});

function tocarTamborDerecho() {
  let tocarTamborDerecho = document.getElementById("sonidoTamborDerecho");
  let sombra = document.getElementById("k");

  sombra.style.boxShadow = "0px 0px 7px 8px rgba(252, 245, 245, 0.5)";

  setTimeout(function () {
    sombra.style.boxShadow = "none";
  }, 200);

  if (tocarTamborDerecho.paused) {
    tocarTamborDerecho.play();
  } else {
    tocarTamborDerecho.currentTime = 0;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    tocarTamborDerecho();
  }
});

function tocarIzquierdoSuperior() {
  let tocarIzquierdoSuperior = document.getElementById(
    "sonidoIzquierdoSuperior"
  );
  let sombra = document.getElementById("g");

  sombra.style.boxShadow = "0px 0px 7px 8px rgba(252, 245, 245, 0.5)";

  setTimeout(function () {
    sombra.style.boxShadow = "none";
  }, 200);

  if (tocarIzquierdoSuperior.paused) {
    tocarIzquierdoSuperior.play();
  } else {
    tocarIzquierdoSuperior.currentTime = 0;
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "g") {
    tocarIzquierdoSuperior();
  }
});

function tocarDerechoSuperior() {
  let tocarDerechoSuperior = document.getElementById(
    "sonidoDerechoSuperior"
  );
  let sombra = document.getElementById("j");

  sombra.style.boxShadow = "0px 0px 7px 8px rgba(252, 245, 245, 0.5)";

  setTimeout(function () {
    sombra.style.boxShadow = "none";
  }, 200);

  if (tocarDerechoSuperior.paused) {
    tocarDerechoSuperior.play();
  } else {
    tocarDerechoSuperior.currentTime = 0;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "j") {
    tocarDerechoSuperior();
  }
});

