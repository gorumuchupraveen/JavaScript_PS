// =======If else Condition ============///

// If the condition cuurent hours greater than 1AM and less than 12PM then say Good morning on console

//  Else If the condition cuurent hours greater than 13PM and less than 18PM then say Good afternoon on console

// Else Good Night

let hours = new Date();

if (hours.getHours() >= 1 && hours.getHours() <= 12) {
  console.log("Good afternoon" + " " + "current time is", hours);
} else if (hours.getHours() >= 13 && hours.getHours() <= 18) {
  console.log("good evening" + " " + " cuurent time is", hours);
} else {
  console.log("good Mooringin" + " " + " cuurent time is", hours);
}

// ===========Switch Case ==========//

let employee = "webDesigner";

switch (employee) {
  case "webDesigner":
    console.log("Front End Developer");
    break;

  case "webDeveloper":
    console.log("Back End Developer");
    break;

  default:
    console.log("Full stack Developer");
}

// =========For Loop ============//

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// =========While Loop ============//

let i = 5;

while (i <= 5) {
  if (i % 2 !== 0) {
    i++;
    console.log(i);
  }
}

// ==========For in=============//

const products = {
  name: "google",
  items: "youtube"
};
for (let index in products) {
  console.log(index, products[index]);
}

// ==========For of=============//

const empDet = [
  {
    name: "Praveen",
    id: "1813677",
    role: "Designer"
  },
  {
    name: "Solomon",
    id: "1813678",
    role: "Developer"
  }
];
for (let emp of empDet) {
  console.log(emp);
}

// ======Max ======//
// Returns the highest value
let number = max(5, 3);
console.log("Max number is", number);

function max(a, b) {
  return a > b ? a : b;
}

// ===fizzBuzz=====//
// if the typeof number is divisible by 2 then return "designer"
// if the typeof number is divisible by 4 then return "webDesigner"
// if the typeof number is divisible by 4,2 then return "Front end Developer"
// if the typeof number is Not a number  then return "NaN"

const status = fizzBuzz(5);
console.log("Input type is", status);
function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";
  if (input % 2 === 0 && input % 4 === 0) return "Front End Developer";
  if (input % 2 !== 0 && input % 4 !== 0) return "Back End Developer";
  if (input % 2 === 0) return "Designer";
  if (input % 4 === 0) return "Web Designer";
}

//===pped Test ====//
// if speed greathan equal to 75 then "Ok"
// if the spped more than 75 add points
// Add each 1 points to spped 5 kms incremantly after reach 75kms
// if 12 points "suspended"

speedTest(140);

function speedTest(speed) {
  const speedLmit = 70;
  const kmPerpoint = 5;

  if (speed <= speedLmit + kmPerpoint) {
    console.log("your speed is ok", speed);
    return;
  } else {
    const points = Math.floor(speed - speedLmit) / kmPerpoint;
    if (points >= 15) {
      console.log("Your License is Suspended", speed);
    } else {
      console.log("Your speed is ", speed, " & ", points, "points added");
    }
  }
}

// ====Even Odd Number ===//
CheckNumber(10)
function CheckNumber(numberValue) {
  for (i = 0; i <= numberValue; i++) {
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}
