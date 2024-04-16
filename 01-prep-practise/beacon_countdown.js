/*
If the number is equal to 60, print the number followed by ": One Minute to Liftoff.".
If the number is greater than 10, print the number followed by ": All Systems Green.".
If the number is between 6 and 10, print the number followed by ": Starting Ignition Sequence.".
If the number is between 3 and 5, print the number followed by ": Ignition Complete.".
If the number is between 1 and 2, print the number followed by ": Full Power.".
If the number is equal to 0, print the number followed by ": Liftoff!" and then exit the program.
*/

let num = 60;

console.log(num, ': One Minute to Liftoff.');
num--;

while (num >= 0) {
  if (num > 10) {
    console.log(num, ': All Systems Green.');
  } else if (num <= 10 && num >= 6) {
    console.log(num, ': Starting Ignition Sequence.');
  }else if (num <= 5 && num >= 3) {
    console.log(num, ': Ignition Complete.');
  } else if (num <= 2 && num >= 1) {
    console.log(num, ': Full Power.');
  } else if (num === 0) {
    console.log(num, ': Liftoff!');
  }
  num--;
}