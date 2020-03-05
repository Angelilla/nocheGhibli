let sortArray;
let newLi = "" ;

function connectToApiListRate(){
  
  fetch("https://ghibliapi.herokuapp.com/films")
  .then(response => response.json())
  .then(movieData => {sortArray = movieData.sort((function(a, b) {return a.rt_score - b.rt_score; }));})
  .then((a) => sortArray.reverse())
  .then((b) => sortArray.forEach((e,index) => newLi += `<li>Title: ${sortArray[index].title} Score: ${sortArray[index].rt_score} </li>`))
  .then(document.getElementById('lista').innerHTML = "")
  .then(document.getElementById('lista').innerHTML = newLi);
}

connectToApiListRate();
