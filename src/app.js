/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let palo = document.getElementsByClassName("palo");
  let numero = document.getElementById("numero");
  let btnRandom = document.getElementById("random");
  let card = document.getElementById("carta");
  let ancho = document.getElementById("ancho");
  let alto = document.getElementById("alto");

  // Genera carta cada vez que se refresca la pagina
  generaCarta();

  // Genera carta cada 8 segundos
  let intervalos = setInterval(generaCarta, 8000);

  // Genera carta a traves de un boton
  btnRandom.addEventListener("click", () => {
    generaCarta();
  });

  function cambiaMedidasCarta() {
    if (ancho.value < 150 && alto.value < 250) {
      palo[0].style.fontSize = "40px";
      palo[1].style.fontSize = "40px";
      numero.style.fontSize = "40px";
      card.style.width = `${ancho.value}px`;
      card.style.height = `${alto.value}px`;
    } else {
      palo[0].style.fontSize = "60px";
      palo[1].style.fontSize = "60px";
      numero.style.fontSize = "60px";
      card.style.width = `${ancho.value}px`;
      card.style.height = `${alto.value}px`;
    }
  }

  function generaCarta() {
    cambiaMedidasCarta();
    generaNumero();
    generaPalo();
  }

  function generaPalo() {
    let paloAleatorio = generaNumeroAleatorio(1, 5);

    if (paloAleatorio === 1) {
      paloAleatorio = "♦";
    } else if (paloAleatorio === 2) {
      paloAleatorio = "♠";
    } else if (paloAleatorio === 3) {
      paloAleatorio = "♣";
    } else {
      paloAleatorio = "♥";
    }

    for (let i = 0; i < palo.length; i++) {
      palo[i].innerHTML = paloAleatorio;
      paloAleatorio === "♦" || paloAleatorio === "♥"
        ? (palo[i].style.color = "red")
        : (palo[i].style.color = "black");
    }

    return (palo.innerHTML = paloAleatorio);
  }

  function generaNumero() {
    let numeroAleatorio = generaNumeroAleatorio(1, 13);
    if (numeroAleatorio === 1) {
      numeroAleatorio = "A";
    }
    if (numeroAleatorio === 10) {
      numeroAleatorio = "J";
    }
    if (numeroAleatorio === 11) {
      numeroAleatorio = "Q";
    }
    if (numeroAleatorio === 12) {
      numeroAleatorio = "K";
    }
    return (numero.innerHTML = numeroAleatorio);
  }

  function generaNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
