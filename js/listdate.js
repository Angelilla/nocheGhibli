let sortArray;
let newLi = "" ;

function connectToApiListDate(){
  
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(movieData => sortArray = movieData)
    .then((b) => sortArray.forEach((e,index) => newLi += `<li class="item"><div>
    <img class="image" src="./images/miniaturaspelis/${sortArray[index].title}.jpg" alt="${sortArray[index].title}">
  </div>
  <div class="description">
    <h4>${sortArray[index].title}</h4>
    <h5>${sortArray[index].release_date}</h5>
    <h6>${sortArray[index].rt_score}</h6>
    <p>${sortArray[index].description}</p>
  </div></li>`))
    .then(document.getElementById('lista').innerHTML = "")
    .then(document.getElementById('lista').innerHTML = newLi);
}

const addButton = document.getElementById("elegir");
addButton.onclick = connectToApiListDate;
window.onload = connectToApiListDate();

  //connectToApiListDate();