const myArr = [0, 1, 2, 3, 4, 5, 4];
const myHeros = ["sandeep", "vinay"]; 
const myArr2 = new Array(1, 2, 3, 4, 56, 54, 43);

console.log(myArr[3]);   // 3
console.log(myHeros[5]); // undefined
console.log(myArr2[0]);  // 1

myArr.push(6);
myArr.push(7);
myArr.pop();
console.log(myArr); // [0, 1, 2, 3, 4, 5, 4, 6]

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

const another_array = [
  1, 2, 3, 4, [5, 6, 4, 3], [4, 5, 4, 3], 5, 54, 3, [5, 5, 43], 5, 6, 4, 
  [554, 43, 5, 3], 5, 43, 2, 4
];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// Flattened array: [1, 2, 3, 4, 5, 6, 4, 3, 4, 5, 4, 3, 5, 54, 3, 5, 5, 43, 5, 6, 4, 554, 43, 5, 3, 5, 43, 2, 4]

console.log(Array.from("Sandeep-Gautam"));

let score1=133;
let score2=4534;
let score3=54335;

console.log(Array.of(score1,score2,score3));
