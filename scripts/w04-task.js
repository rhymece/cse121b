/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Rhym Cagbay",
    photo: 'images/rhym.png',
    favoriteFood: ["Chicken Adobo", 
                    "Cheese Pizza", 
                    "Spaghetti", 
                    "Cheese Cake"
                ],
    hobbies: ["Coding", 
                "Basketball", 
                "Card games"
            ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Philippines",
        length: "23 years"
    },
    {
        place: "Singapore",
        length: "11 years"
    },
    {
        place: "Canada",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */

/* Name */
let myName = document.querySelector("#name");
myName.innerHTML = myProfile.name;

/* Photo with attributes */
let myProfileElement = document.querySelector("#photo");
myProfileElement.setAttribute("src", myProfile.photo);
myProfileElement.setAttribute("alt", `${myProfile.name} profile picture!`)

/* Favorite Foods List*/

myProfile.favoriteFood.forEach(createFaveFoodList);

function createFaveFoodList(food){
    let liFaveFood = document.createElement("li");
    liFaveFood.textContent = food;
    document.querySelector("#favorite-foods").appendChild(liFaveFood);
};

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let liHobby = document.createElement("li");
    liHobby.textContent = hobby;
    document.querySelector("#hobbies").appendChild(liHobby);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLivedList);

function placesLivedList (placesAndYears) {
    let dtPlace = document.createElement("dt");
    dtPlace.textContent = placesAndYears.place;
    document.querySelector("#places-lived").appendChild(dtPlace);

    let ddYears = document.createElement("dd");
    ddYears.textContent = placesAndYears.length;
    document.querySelector("#places-lived").appendChild(ddYears);
};