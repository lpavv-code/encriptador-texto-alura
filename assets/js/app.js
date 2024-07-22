document.addEventListener("DOMContentLoaded", (event) => {
  const textarea = document.querySelector(".main__textarea");
  const encryptButton = document.querySelector(".main__button--encrypt");
  const decryptButton = document.querySelector(".main__button--decrypt");
  const resultTextarea = document.querySelector(".result__textarea");
  const asideContainer = document.querySelector(".aside__container");
  const asideResult = document.querySelector(".aside__result");
  const copyButton = document.querySelector(".result__copy");

  // Función para validar el texto en tiempo real
  textarea.addEventListener("input", () => {
    const value = textarea.value;
    const invalidChars = /[^a-z\s]/g;

    if (invalidChars.test(value)) {
      alert("Solo se permiten letras minúsculas sin acentos.");
      textarea.value = value.replace(invalidChars, "");
    }
  });

  // Función para encriptar el texto
  encryptButton.addEventListener("click", () => {
    let text = textarea.value;
    if (!text) return;

    let encryptedText = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    resultTextarea.value = encryptedText;
    textarea.value = "";

    asideContainer.classList.add("hide");
    asideResult.classList.remove("hide");
  });

  // Función para desencriptar el texto (opcional, ya que no se mencionó cómo hacerlo)
  decryptButton.addEventListener("click", () => {
    let text = textarea.value;
    if (!text) return;

    let decryptedText = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    resultTextarea.value = decryptedText;
    textarea.value = "";

    asideContainer.classList.add("hide");
    asideResult.classList.remove("hide");
  });

  // Función para copiar el texto
  copyButton.addEventListener("click", () => {
    resultTextarea.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
  });
});
