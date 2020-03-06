const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

  const prophets = jsonObject['prophets'];
  for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h3");
    let image = document.createElement("img");

    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    h3.textContent = prophets[i].birthdate + " - " + prophets[i].death;
    h4.textContent = "Born in " + prophets[i].birthplace;
    image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('alt', "Portriat of" + prophets[i].name + ' ' + prophets[i].lastname);

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
  }
});