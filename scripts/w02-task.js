/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Rhym Cagbay";
let currentYear = "2024";
let profilePicture = 'images/rhym.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullname}`)


/* Step 5 - Array */
let foodArray = ["Chicken Adobo"," Cheese Pizza", " Spaghetti", " Cheese Cake"]
foodElement.innerHTML = `${foodArray}`;

let extraFavFood = " Caesar Salad";
foodArray.push(extraFavFood)
foodElement.innerHTML += `<br>${foodArray}`;

foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;

foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;


