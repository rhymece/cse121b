/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
let templeList = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", temple.imageUrl);
        imageElement.setAttribute("alt", temple.location);

        article.appendChild(h3);
        article.appendChild(imageElement);
        
        templeElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(url);
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
function reset() {
    //let resetArticle = document.querySelector("article");
    while (templeElement.hasChildNodes()){
        templeElement.removeChild(templeElement.firstChild);
    };
};

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    //temples.filter(temple => temple.templeName.includes("Utah"))
    let filter = document.querySelector("#filtered").value;
    switch (filter){
        case "utah":
            const utahTemple = temples.filter((temple) => temple.location.includes("Utah"));
            displayTemples(utahTemple);
            break;

        case "notutah":
            const nonUtahTemple = temples.filter((temple) => !temple.location.includes("Utah"));
            displayTemples(nonUtahTemple);
            break;
          
        case "older": 
            const setDate = new Date("1950, January, 1");
            const oldTemple = temples.filter((temple) => setDate.getTime() > new Date(temple.dedicated).getTime());
            displayTemples(oldTemple);
            break;

         case "all":
            displayTemples(temples);
    }
};

getTemples();

/* Event Listener */
const selection = document.querySelector("#filtered");
selection.addEventListener("change", () => {filterTemples(templeList)});