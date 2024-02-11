const url = "https://rhymece.github.io/cse121b/project.json";
let movieList = []
const movieElement = document.querySelector("#movies")

const displayMovies = (movies) => {
    movies.forEach(movie => {
        let article = document.createElement("article");
        
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", movie.Poster);
        imageElement.setAttribute("alt", movie.Title);

        let h3 = document.createElement("h3");
        h3.textContent = movie.Title; 

        article.appendChild(imageElement);
        article.appendChild(h3);
        
        movieElement.appendChild(article);


    });
}

const getMovies = async () => {
    const response = await fetch(url);
    if (response.ok) {
        movieList = await response.json();
        displayMovies(movieList);
    }
}


getMovies();
// Function to Display movies when dropdown
// 