var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randombutton");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

function fullColorHex(r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#" + red + green + blue;
}

function random0to255() {
  return Math.floor(Math.random() * 255);
}

function randomize2Color() {
  var a = random0to255();
  var b = random0to255();
  var c = random0to255();
  color1.value = fullColorHex(a, b, c);
  a = random0to255();
  b = random0to255();
  c = random0to255();
  color2.value = fullColorHex(a, b, c);
  setGradient();
}

button.setAttribute("onclick", "randomize2Color()");

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();
