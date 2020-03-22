const openWeatherKeyF = "2e696d97a1d4164227c3cee5ad1e585f";

const townNameF = document.getElementById("town").textContent;
var townIdF = "0";

switch (townNameF) {
    case `Preston, Idaho`:
        townIdF = "5604473";
        break;
    case `Soda Springs, Idaho`:
        townIdF = "5607916";
        break;
    case `Fish Haven, Idaho`:
        townIdF = "5585000";
        break;
        /* default:
             townIdF="5604473";
             break;*/
}


const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=" + townIdF + "&units=imperial&APPID=" + openWeatherKeyF;

fetch(forecast)
    .then((response) => response.json())
    .then((jsObject) => {

        const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));;
        for (let i = 0; i < fiveDayForecast.length; i++) {
            document.getElementById(`forecast${i+1}`).textContent = fiveDayForecast[i].main.temp + "°F";
            const imagesrc = 'https://openweathermap.org/img/w/' + fiveDayForecast[i].weather[0].icon + '.png';
            const desc = fiveDayForecast[i].weather[0].description;

            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);

            const dayOfWeek = new Date(fiveDayForecast[i].dt_txt);
            const daysOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
            document.getElementById(`day${i+1}`).textContent = daysOfTheWeek[dayOfWeek.getDay()];
        }
    });