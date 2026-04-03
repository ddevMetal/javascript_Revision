/*

Your Exercise 3
Write a function called canEnterClub that takes two parameters — age and hasID — and returns:

"Entry granted" if age is 18 or above AND hasID is true
"No ID no entry" if age is 18 or above BUT hasID is false
"Too young" if age is below 18

Test it with at least 3 different combinations and print the results.
Paste your code and output when done.

*/

function canEnterClub(age, hasID) {
  if (age < 18) {
    return "Too young!";
  } else if (age >= 18 && !hasID) {
    return "No ID no entry";
  } else {
    return "Entry granted";
  }
}

console.log(canEnterClub(18, true));
console.log(canEnterClub(17, true));
console.log(canEnterClub(18, false));
console.log(canEnterClub(17, false));

// version 2

function canEnterClub2(age, hasID) {
  return age < 18 ? "too Young" : hasID ? "Entry Granted" : "No Id no entry";
}

console.log(canEnterClub2(18, false));
