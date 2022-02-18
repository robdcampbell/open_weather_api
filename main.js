// GLOBAL SELECTOR VARIABLES
const searchBtn = document.querySelector(".search-btn");
const city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");

// API KEY
const apiKey = "02bf69255bf64032fc3c55c6a2abee17";

// Event Listener
searchBtn.addEventListener("click", fetchWeather);

// Get Weather Data in JSON format from OpenWeather API
function fetchWeather() {
  // Get city input value
  let searchedCity = document.querySelector(".search-bar").value;

  // URL goes in the fetch parameters
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=imperial&appid=${apiKey}`
  )
    .then(function (response) {
      if (!response.ok) {
        alert("City not found.");
        throw new Error("No weather found.");
      }
      // Convert (Parse) the JSON data
      return response.json();
    })
    .then(function (data) {
      // View all the JSON data in the console:
      console.log(data);

      // OpenWeather Specific Data, from API:
      // console.log(data.name);
      // console.log(data.main.temp);
      // console.log(data.weather[0].description);
      // console.log(data.main.humidity);
      // console.log(data.wind.speed);

      city.innerHTML = data.name;
      temp.innerHTML = Math.floor(data.main.temp);
      description.innerHTML = data.weather[0].description;
      humidity.innerHTML = data.main.humidity;
      windSpeed.innerHTML = data.wind.speed;

      // Reset Search Bar
      document.querySelector(".search-bar").value = "";
    });
}
// LOAD DEFAULT VALUES
document.onload = fetchWeather();
