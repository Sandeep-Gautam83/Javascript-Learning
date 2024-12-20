// Object with methods and property updates
const user = {
    username: "Sandeep",
    price: 12434,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
};

// Call the welcomeMessage method
console.log(user.welcomeMessage());

// Update the username property and call the method again
user.username = "Vinay";
user.welcomeMessage();

// Log the global `this`
console.log(this);

// Regular function to demonstrate `this`
function chai() {
    let username = "SANDEEP";
    console.log(this.username);
}
console.log(chai());

// Arrow function to demonstrate `this`
const chaiArrow = () => {
    let username = "SANDEEP";
    console.log(this);
};
chaiArrow();

// Arrow function for adding three numbers
const addTwo = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
console.log(addTwo(33, 4, 5));

// Shorthand arrow function for adding two numbers
const addTwoNumbers = (num1, num2) => num1 + num2;
console.log(addTwoNumbers(44, 54));
