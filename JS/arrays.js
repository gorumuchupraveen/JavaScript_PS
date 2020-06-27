
const numbers = [1,2,5,6];


// ======= Adding items into array =======
// Begining
numbers.unshift(-1,0);

// Ending
numbers.push(7,8);

// Middle
numbers.splice(4,0, 3,4, 'Praveen','Solomon')

// ======= Removing items into array =======

// Begining
const deleteFirst = numbers.shift();
console.log(numbers);
console.log(deleteFirst);

// Ending
const deleteLast = numbers.pop();
console.log(numbers);
console.log(deleteLast);

// Middle
const deleteMiddle = numbers.splice(5,2);
console.log(numbers);
console.log(deleteMiddle);
