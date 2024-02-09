/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers (){
    let add1Element = Number(document.querySelector("#add1").value);
    let add2Element = Number(document.querySelector("#add2").value);
   
    //document.getElementById("sum").value = add(add1Element, add2Element);
    document.querySelector("#sum").value = add(add1Element, add2Element);
}

const addButtonBox = document.getElementById("addNumbers");
addButtonBox.addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers (){
    let sub1Element = Number(document.querySelector("#subtract1").value);
    let sub2Element = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(sub1Element, sub2Element);
}

const subButtonBox = document.querySelector("#subtractNumbers");
subButtonBox.addEventListener("click", subtractNumbers);
 
/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

multiplyNumbers = () => {
    let factor1Element = Number(document.querySelector("#factor1").value);
    let factor2Element = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(factor1Element, factor2Element);
}

const multButtonBox = document.querySelector("#multiplyNumbers");
multButtonBox.addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

divideNumbers = () => {
    let dividendElement = Number(document.querySelector("#dividend").value);
    let divisorElement = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividendElement, divisorElement);
}

const divideButtonBox = document.querySelector("#divideNumbers");
divideButtonBox.addEventListener("click", divideNumbers);

/* Decision Structure */

let totalValue = document.querySelector("#total");

getTotalDue = () => { 
    let subTotalInput = Number(document.querySelector("#subtotal").value);
    let checkBox = document.querySelector("#member");

    if (checkBox.checked == true){
        subTotalInput = subTotalInput - (subTotalInput * 0.20)
    }
    subTotalInput = subTotalInput.toFixed(2);
    totalValue.innerHTML = subTotalInput;
}
// Add if statement here for the club member checkbox

const totalDueButtonBox = document.querySelector("#getTotal");
totalDueButtonBox.addEventListener("click", getTotalDue);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
let sourceArrayDisplay = document.querySelector("#array");
sourceArrayDisplay.innerHTML = numbersArray;

/* Output Odds Only Array */

let oddNumbers = numbersArray.filter((number) => number % 2 === 1);
let oddNumbersDisplay = document.querySelector("#odds");

oddNumbersDisplay.innerHTML = oddNumbers;

/* Output Evens Only Array */

let evenNumbers = numbersArray.filter((number) => number % 2 === 0);
let evenNumbersDisplay = document.querySelector("#evens");

evenNumbersDisplay.innerHTML = evenNumbers;

/* Output Sum of Org. Array */
let sumOfSourceArray = numbersArray.reduce((firstValue, nextValue) => firstValue + nextValue);
document.querySelector("#sumOfArray").innerHTML = sumOfSourceArray;


/* Output Multiplied by 2 Array */

let sourceArrayTimesTwo = numbersArray.map((value) => value * 2 );
document.querySelector("#multiplied").innerHTML = sourceArrayTimesTwo;

/* Output Sum of Multiplied by 2 Array */
let sumOfSourceTimesTwo = numbersArray.map((number) => number * 2);
sumOfSourceTimesTwo = sumOfSourceTimesTwo.reduce((number1, number2) => number1 + number2);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfSourceTimesTwo;