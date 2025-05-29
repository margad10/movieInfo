const searchButton = document.querySelector(".searchBtn");
const searchForm = document.querySelector("form")
const movieContainer = document.querySelector(".movie-container")
const inputBox = document.querySelector(".inputBox")


console.log(inputBox)
const getMovieInfo = async(kinoNer) => {
    const MyApiKey = "f354af57";
    const url = `http://www.omdbapi.com/?apikey=${MyApiKey}&t=${kinoNer}`;
    const response = await fetch (url);
    const data = await response.json()
    showMovieData(data);
}
const showMovieData = (data) => {
    movieContainer.innerHTML=""
    const {Title, imdbRating, Genre, Released,Runtime,Actors,Plot,Poster} = data;

    const movieElement = document.createElement('div')
    movieElement.innerHTML = `<h1> ${Title}</h1>
                                     <p>${Runtime}</p>`
   
    movieContainer.appendChild(movieElement)
    
    const moviePosterElement = document.createElement('div')
    moviePosterElement.classList.add('movie-poster')
    moviePosterElement.innerHTML = `<img src = "${Poster}"/>`
    movieContainer.appendChild(moviePosterElement)


}

searchForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const movieNer = inputBox.value.trim()
    if(movieNer !== ''){
        getMovieInfo(movieNer)
    }
})
// console.log(searchButton);
