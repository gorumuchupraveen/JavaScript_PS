// ====Operators=====//

let x = 10;
let y = 7;
let z;
z = x - y;

//==== Arthemetic Operators===//

console.log(x + y + " " + "Addition");
console.log(x - y + " " + "Subtraction");
console.log("multiplication" + " " + x * y);
console.log("Division" + " " + x / y);
console.log("Percentage" + " " + (x % 1));

console.log(++x, "assignement");
console.log(--x, "decrement");

// ===Assignment Operatos=====//

console.log((x += 5));

//====Both expressions are Same

console.log((x = x + 5));

//=======Comparision Operators =====//

let a = 1;

// =====Relational=======//

console.log("a value is assigned to", a);

console.log("a value greater than", a, a > 0);
console.log("a value less than", a, a < 0);
console.log("a value greater than equals to", a, a >= 1);
console.log("a value less than equals to", a, a <= 1);

// =======Equality=====//

console.log("a value exactly equals to ", a, a === 1);
console.log("a value not equals to ", a, a !== 1);

// =====Srict Equality===(check both type + type)//

console.log(1 === 1);
console.log("1" === 1);

// ===lose Equality=====(only check value)//

console.log("1" == 1);
console.log(1 == 1);
console.log(true == 2);

// ======Ternary Operators ======//

// If a developer knows html,css,js then the developer called as front end developer other wise designer

let developer = "html,css,js";

let role = developer >= "html,css,js" ? "Front end Developer" : "designer";

console.log(role);

//if a customer purshed more than 1000 products then the custmore called as Premium Member other wise plus member

//more than 1000 products

let products = 1001;

let customerName = products > 1000 ? "Premium Member" : "plus member";

//less than 1000 prodcuts

let piusCustomer = products < 100 ? "Premium Member" : "plus member";

console.log(customerName);
console.log(piusCustomer);


// =====Logical Operators OR (||)====//

// Returns True any one of the operands is true

let highIncome = true ;

let goodScroe = false;

let statusLoan = highIncome && goodScroe;

console.log( 'your loan status', statusLoan);


