//change bg when scroll
let navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
  let valueScroll = window.scrollY;
  console.log(valueScroll);
  if (valueScroll < 70) {
    navbar.classList.remove("bg-nav-color");
  } else {
    navbar.classList.add("bg-nav-color");
  }
});

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=17c8dffc0cbd61894a0460817bbba88e&language=en-US&page=1"
)
  .then((response) => response.json())
  .then((response) => {
    const movies = response.results;
    // let cards = "";

    for (const movie of movies) {
      console.log(movie);
    }
    renderAllMovies(movies);
  });

const renderAllMovies = (movies) => {
  const listMovieElement = document.querySelector("#listMovie");
  listMovieElement.innerHTML = "";

  movies.forEach((movie) => {
    listMovieElement.innerHTML += `
        <div class="card">
                <img src="https://www.themoviedb.org/t/p/original/${movie.poster_path}" alt="" />
                <h5 class="title">${movie.title}</h5>
        </div>
      `;
  });
};
