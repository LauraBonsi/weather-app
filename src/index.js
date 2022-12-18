let apiKey = "aa09763d916df0424c840d55bfc2d2c9";

// Add current time and date instead of "Today" in h2
let now = new Date();
let minutes = now.getMinutes();
let hours = now.getHours();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let h2 = document.querySelector("#current-time-day");
h2.innerHTML = `${day}, ${hours}:${minutes}`;

// Display searched city in h1

function displayCurrentCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let currentCityForm = document.querySelector("#city-input-form");
currentCityForm.addEventListener("submit", displayCurrentCity);

//

function showWeather(weather) {
  let temperature = document.querySelector("#big-temperature");
  temperature.innerHTML = Math.round(weather.data.main.temp);
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = weather.data.name;
}

function getCoords(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(data) {
  navigator.geolocation.getCurrentPosition(getCoords);
}

let currentLocation = document.querySelector("#current-location-btn");
currentLocation.addEventListener("click", getCurrentLocation);
