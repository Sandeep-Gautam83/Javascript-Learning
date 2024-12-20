// Function to print the name letter by letter
function sayMyName(name) {
    for (let char of name) {
        console.log(char);
    }
}
sayMyName("SANDEEP");

// Function to add two numbers and log the result
function logTwoNumbersSum(number1, number2) {
    console.log("Sum:", number1 + number2);
}
logTwoNumbersSum(4, 7);

// Function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}
const result = addTwoNumbers(3, 5);
console.log("Result:", result);

// Function to log a user login message
function loginUserMessage(username) {
    if (!username) {
        return "Please enter a valid username";
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Sandeep"));
console.log(loginUserMessage()); // Demonstrates default parameter



function loginUserMessage(username = "Guest") {
    if (!username) {
        return "Please enter a valid username";
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Vinay"));
console.log(loginUserMessage()); 



// +++++++++++++++++++++++++++++++++++++++++

// Function to collect all passed arguments as an array
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500)); // [200, 400, 500]

// Function to collect all arguments after the first two
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 200, 4454)); // [500, 200, 4454]

// Function to handle user object and log its properties
const user = {
    username: "Sandeep",
    price: 1354
};

function handleObject(anyObject) {
    console.log(`Username is: ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); // Username is: Sandeep and price is 1354

// Function to return the second value from an array
const myNewArray = [2445, 645, 67, 6, 54433];

function returnSecondValue(getArray) {
    return getArray[1]; // Returns the second element (index 1)
}

console.log(returnSecondValue(myNewArray)); // 645
