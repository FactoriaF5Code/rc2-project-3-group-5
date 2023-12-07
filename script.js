const customCursor = document.createElement("div");
customCursor.id = "customCursor";
document.body.appendChild(customCursor);

document.addEventListener("mousemove", (e) => {
    customCursor.style.left = e.pageX - 25 + "px";
    customCursor.style.top = e.pageY - 25 + "px";
});


function tocarPlatilloIzquierdoAlto() {
    let platilloIzquierdoAlto = document.getElementById("sonidoPlatilloIzquierdoAlto");
    if (platilloIzquierdoAlto.paused) {
        platilloIzquierdoAlto.play();
    } else {
        platilloIzquierdoAlto.currentTime = 0;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "s") { 
        tocarPlatilloIzquierdoAlto(); 
    }
});

function tocarPlatilloIzquierdoBajo() {
    let platilloIzquierdoBajo = document.getElementById("sonidoPlatilloIzquierdoBajo")
    if (platilloIzquierdoBajo.paused) {
        platilloIzquierdoBajo.play();
    } else {
        platilloIzquierdoBajo.currentTime = 0;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "d") { 
        tocarPlatilloIzquierdoBajo(); 
    }
});

function tocarPlatilloDerecho() {
    let platilloDerecho = document.getElementById("sonidoPlatilloDerecho")
    if (platilloDerecho.paused) {
        platilloDerecho.play();
    } else {
        platilloDerecho.currentTime = 0;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "l") { 
        tocarPlatilloDerecho(); 
    }
});

function tocarTamborIzquierdo() {
    let tamborIzquierdo = document.getElementById("sonidoTamborIzquierdo")
    if (tamborIzquierdo.paused) {
        tamborIzquierdo.play();
    } else {
        tamborIzquierdo.currentTime = 0;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "f") { 
        tocarTamborIzquierdo(); 
    }
});

function tocarBombo() {
    let bombo = document.getElementById("sonidoBombo")
    if (bombo.paused) {
        bombo.play();
    } else {
        bombo.currentTime = 0;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "h") { 
        tocarBombo(); 
    }
});

function tocarTamborDerecho() {
    let tamborDerecho = document.getElementById("sonidoTamborDerecho")
    if (tamborDerecho.paused) {
        tamborDerecho.play();
    } else {
        tamborDerecho.currentTime = 0;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "k") { 
        tocarTamborDerecho(); 
    }
});

function tocarIzquierdoSuperior() {
    let izquierdoSuperior = document.getElementById("sonidoIzquierdoSuperior")
    if (izquierdoSuperior.paused) {
        izquierdoSuperior.play();
    } else {
        izquierdoSuperior.currentTime = 0;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "g") { 
        tocarIzquierdoSuperior(); 
    }
});

function tocarDerechoSuperior() {
    let derechoSuperior = document.getElementById("sonidoDerechoSuperior")
    if (derechoSuperior.paused) {
        derechoSuperior.play();
    } else {
        derechoSuperior.currentTime = 0;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "j") { 
        tocarDerechoSuperior(); 
    }
});


