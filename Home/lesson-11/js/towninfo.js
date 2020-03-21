const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns']

    console.table(jsonObject);
    towns.forEach(town => {
      switch (town.name) {
        case 'Preston':
        case 'Fish Haven':
        case 'Soda Springs':
          let card = document.createElement('section');
          let townName = document.createElement('h2');
          let townMotto = document.createElement('h3');
          let townFounded = document.createElement('p');
          let townPop = document.createElement('h4');
          let avgRain = document.createElement('h3');
          let townEvents = document.createElement('p');
          let image = document.createElement('img');


          townName.textContent = town.name;
          townMotto.textContent = town.motto;
          townPop.textContent = "Town Population: " + town.currentPopulation;
          avgRain.textContent = "Average Annual Rain: " + town.averageRainfall + " inches";
          image.setAttribute('src', 'images/' + town.photo);
          image.setAttribute('alt', 'Image of ' + town.name);


          card.appendChild(townName);
          card.appendChild(townMotto);
          card.appendChild(townPop);
          card.appendChild(avgRain);
          card.appendChild(image);



          document.querySelector('.cards').appendChild(card);

          break;
        default:
          break;
      };
    });
  })