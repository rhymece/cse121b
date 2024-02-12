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

    let filter = document.querySelector("filtered").value;
    switch(filter){
        case "action": 
        const actionMovie = movies.filter((movie) => movie.Genre.includes("action"));
        displayMovies(actionMovie);
        break;

        case "comedy":
        const comedyMovie = movies.filter((movie) => movie.Genre.includes("comedy"));
        displayMovies(comedyMovie);
        break;

        case "horror":
        const horrorMovie = movies.filter((movie) => movie.Genre.includes("horror"));
        displayMovies(horrorMovie);
        break;
        
        case "all":
        displayMovies(movies);
        break;
    }


}

getMovies();

const choice = document.querySelector("#filtered");
choice.addEventListener("change", ()=> {
    displayMovies(movieList);
})