const connectToApiListRate = () =>{
  
  fetch("https://ghibliapi.herokuapp.com/films")
  .then(response => response.json())
  .then(movieData => movie = movieData[function orderRate() {
    return [...movieData]
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map(eachMovie => eachMovie.title)
    .slice(0, 20);
  }])
  .catch(function(error){
    return error;
});
  
  
  
  
  
}