// Object literals
const JsUser = {
    name: "Sandeep",
    age: 18,
    location: "Pratapgarh",
    email: "Sandeep@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
console.log(JsUser.location);

// Add methods to the object
JsUser.greeting = function() {
    console.log("Hello js user");
};
JsUser.greeting(); // Call the function directly

JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);
};
JsUser.greetingTwo(); // Call the function directly


