/*
Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases
*/

let bethanyAge = Math.round(Math.random() * 4) + 13;
let danyAge = Math.round(Math.random() * 12);
let mariaAge = Math.round(Math.random() * 52) + 18;

const whichSchool = function(name, age) {
  if (age < 13) {
    console.log(name, ' should go to Elementary School.');
  } else if (age >= 13 && age <= 18) {
    console.log(name, ' should go to High School.');
  } else if (age >= 19) {
    console.log(name, ' should go to Lighthouse Labs');
  }
}

console.log(whichSchool('Bethany', bethanyAge));