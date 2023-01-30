function cliqueTecla(event) {
  if (event.key === "r") {
    document.body.classList.toggle("vermelho");
  }
  if (event.key === "p") {
    document.body.classList.toggle("rosa");
  }
  if (event.key === "b") {
    document.body.classList.toggle("azul");
  }
  if (event.key === "y") {
    document.body.classList.toggle("amarelo");
  }

  console.log(event.key);
}

window.addEventListener("keydown", cliqueTecla);
