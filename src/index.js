function updateWeather(response) {
  let weatherTemperature = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  weatherTemperature.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "8d0f974875ac7d348e4bt2300e1o239e";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(updateWeather);
}

function handelSearchSubmit(event) {
  event.preventDefault();
  let searchImput = document.querySelector("#search-form-imput");

  searchCity(searchImput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handelSearchSubmit);

searchCity("London");
