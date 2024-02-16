const movieUrl = "https://rhymece.github.io/cse121b/project.json";
let movieList = []
const movieElement = document.querySelector("#movies");
const resultElement = document.querySelector("#result");

const displayMovies = (movies) => {
    movies.forEach(movie => {
        let article = document.createElement("article");
        article.classList = "movieArticle";
        
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", movie.Poster);
        imageElement.setAttribute("alt", movie.Title);

        let h3Title = document.createElement("h3");
        h3Title.textContent = movie.Title; 

        let h4Year = document.createElement("h4");
        h4Year.textContent = movie.Year;
        
        let h4Genre = document.createElement("h4");
        h4Genre.textContent = movie.Genre;

        let btn = document.createElement("button");
        btn.id = movie.Id;
        btn.textContent = "More Details...";

        article.appendChild(imageElement);
        article.appendChild(h3Title);
        article.appendChild(h4Year);
        article.appendChild(h4Genre);
        article.appendChild(btn);
        
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
    while (resultElement.hasChildNodes()){
        resultElement.removeChild(resultElement.firstChild);
    }
}

function resetInput() {
    document.querySelector("#searchInput").value = "";
}

function movieFilter(movies) {
    reset();
    resetInput()
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
        
        case "fantasy":
            const fantasyMovie = movies.filter((movie) => movie.Genre.includes("Fantasy"));
            displayMovies(fantasyMovie);
            break;
        
        case "all":
        displayMovies(movies);
        break;
    }
}

const displayClickMovie = (movies) => {
    
    movies.forEach(movie => {
       
        let clickArticle = document.createElement("article");
        let clickImage = document.createElement("img");
        let h3 = document.createElement("h3");
        let h4Year = document.createElement("h4");
        let h4Rated = document.createElement("h4");
        let h4Genre = document.createElement("h4")
        
        clickImage.setAttribute("src", movie.Poster);
        clickImage.setAttribute("alt", movie.Title);
        h3.textContent = movie.Title;
        h4Year.textContent = movie.Year;
        h4Rated.textContent = movie.Rated;
        h4Genre.textContent = movie.Genre;

        clickArticle.appendChild(image);
        clickArticle.appendChild(h3);
        clickArticle.appendChild(h4Year);
        clickArticle.appendChild(h4Genre);
        clickArticle.appendChild(h4Rated);

        resultElement.appendChild(article);

    });
}

function clickFilter(movies) {
    reset();
    let btnValue = document.getElementsByTagName("button");
    console.log(btnValue.value);
    const clickMovie = movies.forEach(movie => {
        if (btnValue === movie.Title){
            displayClickMovie(clickMovie);
        }
    })
}

function searchFilter(movies) {
    reset();
    let searchValue = document.querySelector("#searchInput").value;
    searchValue = searchValue[0].toUpperCase() + searchValue.slice(1);
    const selectedMovie = movies.filter((movie) => movie.Title.includes(searchValue));
    
    if (selectedMovie.length === 0){
        let article = document.createElement("article");
        let h4 = document.createElement("h4");

        h4.textContent = "No results found!";
        article.appendChild(h4);
        resultElement.appendChild(article);

    } else {
        displayMovies(selectedMovie);
    } 
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

//let parent = document.querySelector("#movies");
//let child = parent.querySelector(".movieArticle");
//let grandchild = child.querySelector(".btnSelect")
//grandchild.addEventListener("click", reset());




