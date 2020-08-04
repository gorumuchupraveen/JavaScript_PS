const numbers = [1, 2, 5, 6];

// ======= Adding items into array =======//
// Begining
numbers.unshift(-1, 0);

// Ending
numbers.push(7, 8);

// Middle
numbers.splice(4, 0, 3, 4, "Praveen", "Solomon");

// ======= Removing items into array =======//

// Begining
const deleteFirst = numbers.shift();
console.log(numbers);
console.log(deleteFirst);

// Ending
const deleteLast = numbers.pop();
console.log(numbers);
console.log(deleteLast);

// Middle
const deleteMiddle = numbers.splice(5, 2);
console.log(numbers);
console.log(deleteMiddle);

//======== Emptying Array list==============//

// 4 methods are there for deleting array data

// Ignore Laste method
// First theree methods are use cases

let count = [10, 11, 12, 13, 14, 15];

let anotherCount = count;

// Method 1
count = [];
console.log(anotherCount);
console.log(count);

// Method 2
count.length = 0;
console.log(count);

// Method 3

count.splice(0, count.length);
console.log(count);

// Method 4
// getting issues with this method while maintaing large array of data, page loading issue
// not use case
while (count.length > 0) count.pop();
console.log(count);

// ===========Combing Arrays ================//

const firstArray = [
  {
    id: 1813677,
    name: "Praveen"
  }
];
const secondArray = [1, 2, 3, 4];
const thirdArray = ["praveen", "Solomon"];

// 2 methods are there for combing arrays
// Method 1
const combineArrays = firstArray.concat(secondArray).concat(thirdArray);

const slice = combineArrays.slice();

console.log(combineArrays);
console.log(slice);

// Method 2 ***Spread Method***
// we can add arrays in betteen the elements
const combineArrays = [
  ...firstArray,
  "Google",
  "Amazon",
  ...secondArray,
  "Front end Developer",
  ...thirdArray
];

const anotherCopy = combineArrays.splice();

console.log(combineArrays);
console.log(anotherCopy);

// ==========Iterating Arrays======//

const prices = [10, 20, 30, 40];

// For of method index value didn't get
for (price of prices) console.log(price);

// with forEach Method we can get index

prices.forEach(function(price, index) {
  console.log(index, price);
});

// Code Optimazing forEach Method with arrow function

prices.forEach((price, index) => console.log(index, price));

// ==========Join Arrays=======//

const items = ["Front End", "BackEnd", 1, 2, 3];

// Join Array Items;

const joinArray = items.join();

console.log(items);
console.log(joinArray);

const msg = "This is Praveen Groumuch";

// spliting word

const splitMsg = msg.split(" ");

console.log(msg);
console.log(splitMsg);

// ***Joining Word***

const joinMsg = splitMsg.join("_");
console.log(joinMsg);

// Sorting arrays

const courses = [
  {
    id: 28,
    name: "Javascript"
  },
  {
    id: 18,
    name: "Angular"
  },
  {
    id: 17,
    name: "Typescript"
  }
];

const sortTop = courses.sort();
console.log(sortTop);

const reverseSort = courses.reverse();

console.log(reverseSort);

courses.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);

// ====Reducing arrays ===//
// Returns single sum of an arrays

const numberList = [-1,2,1,3,2];

const reduceList = numberList.reduce((accumulator,currentValue) =>
accumulator + currentValue,1
);
console.log(reduceList);

// Array from range min value to max value 

const values = arrayFromList(10,-2);
console.log(values)

function arrayFromList(max,min){
  let outputArray =[];
  for (i=min; i<=max; i++)
    outputArray.push(i);
    return outputArray;
}