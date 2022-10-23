var swiper = new Swiper(".mySwiper", {
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

const slidesCom = document.querySelector(".swiper-slide");

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?api_key=17c8dffc0cbd61894a0460817bbba88e&language=en-US&page=1"
)
  .then((response) => response.json())
  .then(
    (response) => {
      const moviess = response.results;
      const movies = moviess.slice(0, 5);
      // let cards = "";
      // console.log(movies.slice(0, 3));
      let test = "";
      renderAllSlides(movies);
      // for (const movie of movies) {
      // test = `${movie.title},test,https://www.themoviedb.org/t/p/original/${movie.poster_path},https://codepen.io/emanuelemicheletti/pen/abYarrv,View this movie`;
      //   myArray.push(
      //     movie.title,
      //     "test",
      //     "https://www.themoviedb.org/t/p/original/ " + movie.poster_path + "",
      //     "https://codepen.io/emanuelemicheletti/pen/abYarrv",
      //     "View Movie"
      //   );

      //   console.log(
      //     "https://www.themoviedb.org/t/p/original/" + movie.poster_path
      //   );
      console.log(slidesCom);
    }
    //   }
  );

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
