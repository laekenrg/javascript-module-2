/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)*/

function backgroundChange() {
  const fondo = document.querySelector("body");
  fondo.style.backgroundColor = "red";
}

setTimeout(backgroundChange, 5000);

/*Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

let posicionColor = 0;
const colores = ["blue", "grey", "yellow", "orange", "green", "pink", "purple"];
function backgroundChange() {
  const fondo = document.querySelector("body");
  fondo.style.backgroundColor = colores[posicionColor];
  posicionColor++;
  if (posicionColor === colores.length) {
    posicionColor = 0;
  }
}
window.setInterval(backgroundChange, 5000);
