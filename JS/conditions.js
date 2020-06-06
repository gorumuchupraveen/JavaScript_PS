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

let employee = 'webDesigner' ;

switch (employee) {
  case 'webDesigner':
  console.log('Front End Developer');
  break;

  case 'webDeveloper':
  console.log('Back End Developer');
  break;

  default : console.log('Full stack Developer');
}

// =========For Loop ============//

for (let i = 1; i <= 5; i++ ){
   console.log(i)

}