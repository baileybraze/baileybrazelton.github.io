const openWeatherKey = "2e696d97a1d4164227c3cee5ad1e585f";

const townName = document.getElementById("town").textContent;
var townId = "0";

switch (townName) {
    case `Preston, Idaho`:
        townId = "5604473";
        break;
    case `Soda Springs, Idaho`:
        townId = "5607916";
        break;
    case `Fish Haven, Idaho`:
        townId = "5585000";
        break;
    default:
        townId = "5604473";
        break;
}


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + townId + "&units=imperial&APPID=" + openWeatherKey;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const currentTemp = document.querySelector("#current-temp");
        const highTemp = document.querySelector("#tempHigh");
        const humid = document.querySelector("#humidity");
        const windS = document.querySelector("#windSpeed");

        currentTemp.textContent = jsObject.main.temp;
        highTemp.textContent = jsObject.main.temp_max;
        humid.textContent = jsObject.main.humidity;
        windS.textContent = jsObject.wind.speed;


        var wChill = 0;
        const t = jsObject.main.temp;
        const s = jsObject.wind.speed;
        if (t < 50 && s > 3) {
            wChill = (35.74 + (0.6215 * t) - 35.75 * Math.pow(s, .16) + (.4275 * t * Math.pow(s, .16))).toFixed(0) + "°F";
        } else {
            wChill = " N/A"
        }
        document.getElementById("windChill").textContent = wChill;
    });