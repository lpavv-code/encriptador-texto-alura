const textoIngreso = document.querySelector(".text-ingreso");
const textoResultado = document.querySelector(".texto-resultado");
const seccionEspera = document.getElementById("espera");
const seccionResultado = document.getElementById("resultado");

document.querySelector(".boton-copiar").addEventListener("click", copiarTexto);

function copiarTexto() {
  const texto = textoResultado.value;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

function encriptar(parametroEncriptado) {
  let codificacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  parametroEncriptado = parametroEncriptado.toLowerCase();

  for (let i = 0; i < codificacion.length; i++) {
    if (parametroEncriptado.includes(codificacion[i][0])) {
      parametroEncriptado = parametroEncriptado.replaceAll(
        codificacion[i][0],
        codificacion[i][1]
      );
    }
  }
  return parametroEncriptado;
}

function btnEncriptar() {
  const texto = textoIngreso.value;
  if (texto === "") {
    alert("Ingresa un texto para poder encriptar");
    return;
  }

  if (!/^[a-z\s]+$/.test(texto)) {
    alert("Solo letras minúsculas y sin acentos");
    return;
  }

  const textoEncriptado = encriptar(texto);
  textoResultado.value = textoEncriptado;
  textoIngreso.value = "";

  seccionEspera.classList.add("hide");
  seccionResultado.classList.remove("hide");
}

function desencriptar(parametroDesencriptado) {
  let codificacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  parametroDesencriptado = parametroDesencriptado.toLowerCase();

  for (let i = 0; i < codificacion.length; i++) {
    if (parametroDesencriptado.includes(codificacion[i][1])) {
      parametroDesencriptado = parametroDesencriptado.replaceAll(
        codificacion[i][1],
        codificacion[i][0]
      );
    }
  }
  return parametroDesencriptado;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textoIngreso.value);
  textoResultado.value = textoDesencriptado;
  textoIngreso.value = "";
}
