const calcularForcaGravitacional = () => {
  const massa1 = document.getElementById("massa1").value;
  const massa2 = document.getElementById("massa2").value;
  const gravidade = document.getElementById("constante").value;
  const distancia = document.getElementById("distancia").value;

  document.getElementById("resultado").value =
    (gravidade * massa1 * massa2) / distancia ** 2;
};
