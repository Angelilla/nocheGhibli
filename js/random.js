
const connectToApiRandom = () => {
  
  let random = Math.round(Math.floor((Math.random() * 20)));
  
  fetch("https://ghibliapi.herokuapp.com/films")
  .then(response => response.json())
  .then(movieData => movie = movieData[random])
  .then(getElement => document.getElementById("random-movie").innerHTML = `
  <div class="image">
    <img src="./images/miniaturaspelis/${movie.title}.jpg" alt="${movie.title}">
  </div>
  <div class="description">
    <h2>${movie.title}</h2>
    <p>${movie.description}</p>
  </div>
`)
  .catch(function(error){
      return error;
  });

};

const addButton = document.getElementById("elegir");
addButton.onclick = connectToApiRandom;

//window.onload = connectToApiList

