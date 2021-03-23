/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["Mi perro", "Mi mamá", "Mi hermanito"];
  let accion = ["se comío", "tiró", "daño", "mojó", "explotó"];
  let que = ["mi tarea", "mi comida", "la laptop", "el teléfono"];
  let cuando = ["esta mañana", "ayer", "justo antes de salir", "anoche"];
  let emoji = ["😱", "😢", "😦", "🙁", "😟"];

  function fraseRandom() {
    let quienRandom = Math.floor(Math.random() * quien.length);
    let accionRandom = Math.floor(Math.random() * accion.length);
    let queRandom = Math.floor(Math.random() * que.length);
    let cuandoRandom = Math.floor(Math.random() * cuando.length);
    let emojiRandom = Math.floor(Math.random() * emoji.length);

    let oracionRandom = `${quien[quienRandom]} ${accion[accionRandom]} ${que[queRandom]} ${cuando[cuandoRandom]} ${emoji[emojiRandom]}  `;

    return oracionRandom;
  }
  let excuse = fraseRandom();
  document.querySelector(
    "#excuse"
  ).innerHTML = `<h1 style="color: purple;">${excuse}</h1>`;
};
