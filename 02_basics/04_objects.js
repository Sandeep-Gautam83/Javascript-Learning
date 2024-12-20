// Creating an object using the Object constructor
const tinderUser = new Object();

tinderUser.id = "1233svf";
tinderUser.name = "Sandeep";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

// Creating a regular user object with nested structure
const regularUser = {
    email: "Sandeep@google.com",
    fullname: {
        userFullname: {
            firstname: "Sandeep",
            lastname: "Gautam"
        }
    }
};

console.log(regularUser);
console.log(regularUser.fullname.userFullname.firstname); // Accessing nested properties

// Creating and combining objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// Embedding obj1 and obj2 inside obj3
const obj3Embedded = { obj1, obj2 };
console.log(obj3Embedded);

// Merging obj1 and obj2 into a single object
const obj3Merged = Object.assign({}, obj1, obj2);
console.log(obj3Merged);

// Alternative: Using the spread operator to merge objects
const obj3Spread = { ...obj1, ...obj2 };
console.log(obj3Spread);

// Array of user objects
const users = [
    { id: 1, email: "Sandeep@mmnnit.ac.in" },
    { id: 2, email: "Amit@mmnnit.ac.in" },
    { id: 3, email: "Rahul@mmnnit.ac.in" }
];

// Access the second user's email
console.log(users[1].email);

// Object utility methods
console.log(Object.keys(tinderUser)); // Get keys
console.log(Object.values(tinderUser)); // Get values
console.log(Object.entries(tinderUser)); // Get entries
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Check property existence

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Using destructuring
const course = {
    coursename: "js in tutorial",
    price: "654",
    courseInstructor: "Sandeep"
};

const { courseInstructor } = course;
console.log(courseInstructor);

// Properly defining and logging the JSON-like block
const jsonLikeObject = {
    name: "Sandeep",
    coursename: "js in tutorial",
    price: "free"
};
console.log(jsonLikeObject);
