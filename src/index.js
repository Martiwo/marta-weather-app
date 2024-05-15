function updateWeather(response) {
  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "8d0f974875ac7d348e4bt2300e1o239e";
  let apiURL = `"https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric"`;
  axios.get(apiURL).then(updateWeather);
}

function handelSearchSubmit(event) {
  event.preventDefault();
  let searchImput = document.querySelector("#search-form-imput");
  console.log(searchImput.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchImput.value;
  searchCity(searchImput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handelSearchSubmit);
