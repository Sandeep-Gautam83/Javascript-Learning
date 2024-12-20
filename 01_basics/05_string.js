const name = "Sandeep"
const repoCount = 50 

// console.log(name + repoCount + "Value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');


const gameName = new String ('Sandeep-Gautam-hc');
console.log(gameName);
console.log(gameName[3]);
console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());


console.log(gameName.charAt(4));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(4, 12); // Example range
console.log(anotherString);


//trim used

const newStringOne = "     Sandeep    "
console.log(newStringOne);
console.log(newStringOne.trim());


//url replace concept

const url = "https://Sandeep.com/Sandeep%20Gautam"
console.log(url.replace('20','-'));

console.log(url.includes('Sandeep'));

console.log(gameName.split('-'));