
const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=2e696d97a1d4164227c3cee5ad1e585f`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = document.querySelector("#current-temp");
        const highTemp = document.querySelector("#tempHigh");
        const humid = document.querySelector("#humidity");
        const windS = document.querySelector("#windSpeed");

        currentTemp.textContent = jsObject.main.temp;
        highTemp.textContent = jsObject.main.temp_max;
        humid.textContent = jsObject.main.humidity;
        windS.textContent = jsObject.wind.speed;

    })