function handelSearchSubmit(event) {
  event.preventDefault();
  let searchImput = document.querySelector("#search-form-imput");
  console.log(searchImput.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchImput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handelSearchSubmit);
