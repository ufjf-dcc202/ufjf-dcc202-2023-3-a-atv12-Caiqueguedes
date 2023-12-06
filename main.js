//main.js
console.log(document);
document.entrada.addEventListener("submit", leFormulario);
//leFormulario();

function leFormulario(event) {
  event.preventDefault();
  const fruta = document.entrada.furta.value;
  const quantidade = document.entrada.fruta.value;

  console.log(`${fruta} qtd: ${quantidade}`);
}
