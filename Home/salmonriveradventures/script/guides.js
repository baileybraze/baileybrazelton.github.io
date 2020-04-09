
const requestURL = "guidedata.json"
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  const guides = jsonObject['guides'];
    for (let i = 0; i < guides.length; i++ ) {
      let card = document.createElement('section');
      let name = document.createElement('h3');
      let cert = document.createElement("p");
      let years = document.createElement("p");
      let email = document.createElement("p");
      let bio = document.createElement("p");
      let image = document.createElement("img");

    image.setAttribute('src', guides[i].photo);
      image.setAttribute('alt', "Picture of " + guides[i].name);
      name.textContent = guides[i].name; 
      cert.textContent = "Certifications: " + guides[i].certLevel;
      years.textContent = "Years Guiding: " + guides[i].yearsGuiding;
      email.textContent = "Contact: " + guides[i].email;
      bio.textContent = "About Me: " + guides[i].bio;
    
      card.appendChild(image);  
      card.appendChild(name);
      card.appendChild(cert);
      card.appendChild(years);
      card.appendChild(email);
      card.appendChild(bio);

  
      document.querySelector('div.cards').appendChild(card);
    }
});