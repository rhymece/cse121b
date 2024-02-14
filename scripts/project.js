const movieUrl = "https://rhymece.github.io/cse121b/project.json";
let movieList = []
const movieElement = document.querySelector("#movies")

const displayMovies = (movies) => {
    movies.forEach(movie => {
        let article = document.createElement("article");
        
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", movie.Poster);
        imageElement.setAttribute("alt", movie.Title);

        let h3Title = document.createElement("h3");
        h3Title.textContent = movie.Title; 

        let h4Year = document.createElement("h4");
        h4Year.textContent = movie.Year;
        
        let h4 = document.createElement("h4");
        h4.textContent = movie.Genre;

        article.appendChild(imageElement);
        article.appendChild(h3Title);
        article.appendChild(h4Year);
        article.appendChild(h4);
        
        movieElement.appendChild(article);


    });
}

const getMovies = async () => {
    const response = await fetch(movieUrl);
    if (response.ok) {
        movieList = await response.json();
        displayMovies(movieList);
    }
}

function reset() {
    while (movieElement.hasChildNodes()){
        movieElement.removeChild(movieElement.firstChild);
    }
}

function movieFilter(movies) {
    reset();
    let filterValue = document.querySelector("#filteredValue").value;
    switch(filterValue){
        case "action": 
            const actionMovie = movies.filter((movie) => movie.Genre.includes("Action"));
            displayMovies(actionMovie);
            break;

        case "comedy":
            const comedyMovie = movies.filter((movie) => movie.Genre.includes("Comedy"));
            displayMovies(comedyMovie);
            break;

        case "horror":
            const horrorMovie = movies.filter((movie) => movie.Genre.includes("Horror"));
            displayMovies(horrorMovie);
            break;

        case "drama":
            const dramaMovie = movies.filter((movie) => movie.Genre.includes("Drama"));
            displayMovies(dramaMovie);
            break;
        
        case "history":
            const historyMovie = movies.filter((movie) => movie.Genre.includes("History"));
            displayMovies(historyMovie);
            break;

        case "adventure":
            const adventureMovie = movies.filter((movie) => movie.Genre.includes("Adventure"));
            displayMovies(adventureMovie);
            break;
        
        case "all":
        displayMovies(movies);
        break;
    }
}

function searchFilter(movies) {
    reset();
    let searchValue = document.querySelector("#searchInput").value;
    searchValue = searchValue[0].toUpperCase() + searchValue.slice(1);
    const selectedMovie = movies.filter((movie) => movie.Title.includes(searchValue));
    displayMovies(selectedMovie);
}



getMovies();

const choice = document.querySelector("#filteredValue");
choice.addEventListener("change", ()=> {
    movieFilter(movieList);
});

let search = document.querySelector("#searchInput");
search.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        searchFilter(movieList);
    }
})

