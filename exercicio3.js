let buttons = document.querySelectorAll(".botao-expandir-retrair");

for (let button of buttons) {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("expandido");
    button.innerText === "+"
      ? (button.innerText = "-")
      : (button.innerText = "+");
  });
}
