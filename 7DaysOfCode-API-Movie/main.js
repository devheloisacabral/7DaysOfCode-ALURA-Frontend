import {keys} from "./keys.js"


fetch(keys.API_URL, {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": keys.API_KEY,
    "X-RapidAPI-Host": keys.API_HOST,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const list = data.d; //toda lista de filmes do array
    data.map((item, index) => {
      if(index !== 0){
        renderMovie(item)
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });

const moviesContainer = document.querySelector(".movies"); //pega a div movies do html

//quando meu html for carregado, ele executará uma função => pra cada movie de movies, renderize


function renderMovie(data) {
  
  const { title: title, image, rating, year,  description, isFavorited } = data; //atribui a movies esses atributos
 

  const movieElement = document.createElement("div"); //cria uma div
  movieElement.classList.add("movie"); //coloca a class dessa div como movie
  moviesContainer.appendChild(movieElement); //manda essa div para a div do html que capturamos no inicio do codigo

  const movieInformations = document.createElement("div");
  movieInformations.classList.add("movie-informations");

  const movieImageContainer = document.createElement("div");
  movieImageContainer.classList.add("movie-image");
  const movieImage = document.createElement("img");
  movieImage.src = image;
  movieImage.alt = `${title} Poster`; // pega o title de cada filme para colocar como alt da imagem
  movieImageContainer.appendChild(movieImage);
  movieInformations.appendChild(movieImageContainer);

  const movieTextContainer = document.createElement("div");
  movieTextContainer.classList.add("movie-text");
  const movieTitle = document.createElement("h4");
  movieTitle.textContent = `${title} (${year})`;
  movieTextContainer.appendChild(movieTitle);
  movieInformations.appendChild(movieTextContainer);

  const informations = document.createElement("div");
  informations.classList.add("movie-informations");
  movieTextContainer.appendChild(informations);

  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("rating");
  const starImage = document.createElement("img");
  starImage.src = "images/Star.svg";
  starImage.alt = "Star";
  const movieRate = document.createElement("span");
  movieRate.classList.add("movie-rate");
  movieRate.textContent = rating;
  ratingContainer.appendChild(starImage);
  ratingContainer.appendChild(movieRate);
  informations.appendChild(ratingContainer);

  const favorite = document.createElement("div");
  favorite.classList.add("favorite");
  const favoriteImage = document.createElement("img");
  favoriteImage.src = isFavorited
    ? "images/Heart-fill.svg"
    : "images/heart.svg";
  favoriteImage.alt = "Heart";
  favoriteImage.classList.add("favoriteImage");
  const favoriteText = document.createElement("span");
  favoriteText.classList.add("movie-favorite");
  favoriteText.textContent = "Favoritar";
  favorite.appendChild(favoriteImage);
  favorite.appendChild(favoriteText);
  informations.appendChild(favorite);

  const movieDescriptionContainer = document.createElement("div");
  movieDescriptionContainer.classList.add("movie-description");
  const movieDescription = document.createElement("span");
  movieDescription.textContent = description;
  movieDescriptionContainer.appendChild(movieDescription);

  movieElement.appendChild(movieInformations);
  movieElement.appendChild(movieDescriptionContainer);
}
