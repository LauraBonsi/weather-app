// Change 19°C to 66°F when user clicks °F

function showFahrenheit() {
  let currentTemperature = document.querySelector("#big-temperature");
  currentTemperature.innerHTML = `66`;
}

function showCelsius() {
  let currentTemperature = document.querySelector("#big-temperature");
  currentTemperature.innerHTML = `19`;
}
let toFahrenheit = document.querySelector("#to-fahrenheit");
toFahrenheit.addEventListener("click", showFahrenheit);

let toCelsius = document.querySelector("#to-celsius");
toCelsius.addEventListener("click", showCelsius);
