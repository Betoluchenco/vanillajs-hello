import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  window.onload = function() {
    // Arrays con las partes de la excusa
    let who    = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let action = ['se comió', 'me rompió', 'pisó', 'perdió'];
    let what   = ['mi tarea', 'mi teléfono', 'el coche', 'mi almuerzo'];
    let when   = ['antes de la clase', 'mientras dormía', 'durante mi almuerzo'];

    // Función que construye y devuelve una excusa aleatoria
    function generateExcuse() {
      const random = arr => arr[Math.floor(Math.random() * arr.length)];
      return `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;
    }

    // La insertamos en el elemento con id="excuse"
    document.getElementById('excuse').innerHTML = generateExcuse();
  };
