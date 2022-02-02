var codificar = document.querySelector("#btn-encriptar").addEventListener("click", encriptar);

function encriptar(event) {
  event.preventDefault();

  var mensageTexto = document.querySelector("#input-texto").value;
  mensageTexto = mensageTexto.replaceAll()
  .replaceAll('e','enter')
  .replaceAll('i','imes')
  .replaceAll('a','ai')
  .replaceAll('o','ober')
  .replaceAll('u','ufat')

  var texto = document.querySelector("#msg");
  texto.value = mensageTexto;

}



var descodificar = document.querySelector("#btn-desencriptar").addEventListener("click", desencriptar);

function desencriptar(event){
  event.preventDefault();

  var mensageTexto = document.querySelector("#input-texto").value;
  mensageTexto = mensageTexto.replaceAll()
  .replaceAll('enter','e')
  .replaceAll('imes','i')
  .replaceAll('ai','a')
  .replaceAll('ober','o')
  .replaceAll('ufat','u')

  var texto = document.querySelector("#msg");
  texto.value = mensageTexto;

}

var botonCopiar = document.querySelector("#btn-copy").addEventListener("click", copiar);

function copiar() {
  var copiarTexto = document.querySelector("#msg");
  copiarTexto.select();
  document.execCommand("copiar");

}

document.querySelector("#btn-copy").addEventListener("click", copiar);