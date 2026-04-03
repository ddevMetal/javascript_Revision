/*

Your Exercise 2
Add this to a new file conditional_Ex2.js:
Write a function called getGrade that takes one parameter score and returns a grade based on these rules:

80 and above → "A"
70 and above → "B"
60 and above → "C"
Below 60 → "F"

*/

function getGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else if (score >= 50) {
    return "P";
  } else {
    return "F";
  }
}

console.log(getGrade(90));
console.log(getGrade(80));
console.log(getGrade(70));
console.log(getGrade(60));
console.log(getGrade(50));
console.log(getGrade(40));
console.log(getGrade(30));
console.log(getGrade(20));
console.log(getGrade(10));
console.log(getGrade(00));
