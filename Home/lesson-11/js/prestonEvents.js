const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston") {
        getEvents(towns[i]);
      }
    }

    function getEvents(townD) {
      let eventsCard = document.createElement('div')
      let title = document.createElement('h2');
      let eventsDates = document.createElement('div');
      let eventP1 = document.createElement('p');
      let eventP2 = document.createElement('p');
      let eventP3 = document.createElement('p');

      eventsCard.classList.add('eventsCard');
      title.classList.add('titleH2');
      eventsDates.classList.add('eventsDates');
      eventP1.classList.add('eventsP');
      eventP2.classList.add('eventsP');
      eventP3.classList.add('eventsP');


      title.textContent = "Upcoming Events:";
      eventP1.textContent = townD.events[0];
      eventP2.textContent = townD.events[1];
      eventP3.textContent = townD.events[2];


      eventsCard.appendChild(title);
      eventsDates.appendChild(eventP1);
      eventsDates.appendChild(eventP2);
      eventsDates.appendChild(eventP3);
      eventsCard.appendChild(eventsDates);

      document.querySelector('.events').appendChild(eventsCard);

    }
  });