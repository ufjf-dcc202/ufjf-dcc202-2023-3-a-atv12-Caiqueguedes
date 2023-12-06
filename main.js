//main.js
document.entrada.addEventListener("submit", leFormulario);
leFormulario();

function leFormulario() {
  const fruta = document.entrada.furta.value;
  const quantidade = document.entrada.fruta.value;

  console.log(`${fruta} qtd: ${quantidade}`);
}
