/*

Exercise 4 — last one for today
Write a function called findLargest that takes three parameters — a, b, c — and returns the largest of the three numbers.
Use any style you want.
Hint: You'll need nested if/else statements — you already used if/else in Exercise 3.
Paste your code and output when done.

*/

function findLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(findLargest(19, 200, 9999));
