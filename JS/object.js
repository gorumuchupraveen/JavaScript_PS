// =====Objects=====//

let cars = {
  name: "audi",
  price: "$100"
};

// ====Dot notation===//

cars.name = "audi R10";

// ===Bracket Notation=====//

let newName = "name";

cars[newName] = "Audi S8";

console.log(cars.name);

// =========Arrays======//

let products = ["google", "amazon", "flipkart"];

(products[3] = "myntra"), console.log(products);
console.log(products.length);




// How to add functions in objects
const items = {
  car: "Audi",
  openWindow() {}
};
// console.log(items);

// How to clone object and assign more items to the object

// Method 1 
const anotherItems = Object.assign(
  {
    name: 'Praveeen',ID: '1813677', Role: 'Developer'
  },
  items
);
 
//  Method 2

const anotherItems = {...items};

console.log(anotherItems);

// Refre JavaScript String in MDN JavaScript
// For break lines and singlequotes many more....


let name = '  praveen  ';
let skills = '   HTML,CSS,JavaScript  .'
let msg = 'my name is ' + name.trim()  + ', ' + 'i\'m a front end Developer ';

// Method2 for line break and single double quotes

let details = `

  Hello ${msg.trim()}, 

  myskills sets are ${skills}
`;

console.log(details);