//    Notes : Primitive data type

// 7 types : String , NUmber , Boolearn, null, underfined , Symbol, BigInt, 
// null = Empty



// Reference Type ( Non primitive)

// Array, Objects, Functions 



// +++++++++++++++++++++++++++++++++++++++++++++++

// Memory type 2   1. Stack (Primitive data type used hota hai)   2. Heap (Non primitive data type used hota hai)

let myYoutudename = "Sandeepdotcom"
let anothername = myYoutudename
anothername="code with learn "

console.log(myYoutudename);
console.log(anothername);


let userOne  = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email="Sandeep@google.com"

console.log(userOne.email);
console.log(userTwo.email);
