let sortArray;
let newLi = "" ;

function connectToApiListDate(){
  
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(movieData => sortArray = movieData)
    .then((b) => sortArray.forEach((e,index) => newLi += `<li>Title: ${sortArray[index].title} Score: ${sortArray[index].release_date} </li>`))
    .then(document.getElementById('lista').innerHTML = "")
    .then(document.getElementById('lista').innerHTML = newLi);
}

  connectToApiListDate();