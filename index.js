const searchBtn = document.getElementById("search-btn");
const searchQuery = document.getElementById("mySearch");
let movieData;

searchBtn.addEventListener("click", getMovieData);

function getMovieData(movieData) {
  fetch(`http://www.omdbapi.com/?t=${searchQuery.value}&apikey=b5b7795c&`)
    .then((res) => res.json())
    .then((data) => {
      movieData = data;
      console.log(movieData);
      return movieData;
    });
}
