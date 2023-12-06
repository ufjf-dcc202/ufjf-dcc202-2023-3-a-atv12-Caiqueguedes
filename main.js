//main.js
console.log(document);
document.entrada.addEventListener("submit", leFormulario);
//leFormulario();

const olJoao = document.querySelector("#olJoao");
const olMaria = document.querySelector("#olMaria");

function leFormulario(event) {
  event.preventDefault();
  const fruta = document.entrada.furta.value;
  const quantidade = document.entrada.fruta.value;

  console.log(`${fruta} qtd: ${quantidade}`);
}
