import "./src/script/component/app-footer.js";

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//slider AJAX

const slidesCom = document.querySelector(".swiper-slide");

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?api_key=17c8dffc0cbd61894a0460817bbba88e&language=en-US&page=1"
)
  .then((response) => response.json())
  .then((response) => {
    const moviess = response.results;
    const movies = moviess.slice(0, 5);
    renderAllSlides(movies);
    console.log(movies);
  });

const renderAllSlides = (slides) => {
  const slidesCom = document.querySelector(".swiper-wrapper");

  slidesCom.innerHTML = "";

  slides.forEach((sld) => {
    slidesCom.innerHTML += `
        
        <div class="swiper-slide">
              <img
                src="https://www.themoviedb.org/t/p/original/${sld.backdrop_path}"
                alt=""
              />
              <div class="caption">
                <span>${sld.release_date}</span>
                <h1>${sld.title}</h1>
                <button class="btn">View Movie</button>
                <button class="btn-p">Watch Trailer</button>
              </div>
            </div>
      `;
  });
};

//navbar in mobile
let btn = document.querySelector(".burger-btn");
let menu = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links li a");
btn.addEventListener("click", function () {
  menu.classList.toggle("nav-active");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    menu.classList.toggle("nav-active");
  });
}
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

//Popular Movies AJAX
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=17c8dffc0cbd61894a0460817bbba88e&language=en-US&page=1"
)
  .then((response) => response.json())
  .then((response) => {
    const movies = response.results;

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

//Popular TV Series AJAX
fetch(
  "https://api.themoviedb.org/3/tv/popular?api_key=17c8dffc0cbd61894a0460817bbba88e&language=en-US&page=1"
)
  .then((response) => response.json())
  .then((response) => {
    const movies = response.results;

    for (const serie of movies) {
      console.log(serie);
    }
    renderAllTVSeries(movies);
  });

const renderAllTVSeries = (movies) => {
  const listSerieElement = document.querySelector("#listSerie");
  listSerieElement.innerHTML = "";

  movies.forEach((serie) => {
    listSerieElement.innerHTML += `
        <div class="card">
                <img src="https://www.themoviedb.org/t/p/original/${serie.poster_path}" alt="" />
                <h5 class="title">${serie.name}</h5>
        </div>
      `;
  });
};
