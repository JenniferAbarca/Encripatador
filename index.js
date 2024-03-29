let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let muñeco = document.getElementById("muñeco");


function validarTexto(texto) {
    
    var regex = /^[a-z\s]+$/;
    if (!regex.test(texto)) {
        return false;
    }
    return true;
}

function encriptar() {
    let texto = document.getElementById("texto").value;

    if (texto.length === 0) {
        swal("Alerta!", "Debes ingresar un texto", "warning");
        return;
    }
    if (!validarTexto(texto)) {
        swal("Alerta!", "El texto solo debe contener letras minúsculas y sin acentos", "warning");
        return;
    }

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    
     if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
    } else {
        muñeco.src = "./img/muñeco.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar  o desencriptar";
    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value;

    if (texto.length === 0) {
        swal("Alerta!", "Debes ingresar un texto", "warning");
        return;
    }
    if (!validarTexto(texto)) {
        swal("Alerta!", "El texto solo debe contener letras minúsculas y sin acentos", "warning");
        return;
    }

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    if(texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
    }else {
        muñeco.src = "./img/muñeco.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar  o desencriptar";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('boton-copiar').addEventListener('click', function() {
        // Selecciona el texto
        let texto = document.getElementById("texto");
        texto.select();
        // Copia el texto al portapapeles
        document.execCommand('copy');
        swal("Listo!", "El texto ha sido copiado al portapapeles", "success");
    });
});

