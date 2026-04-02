/*
Exercise 3
Write a function called isEven that takes one parameter num and returns "even" if the number is even and "odd" if it's odd.
Hint: Use the % operator — called the modulus operator. It returns the remainder of a division. So 4 % 2 returns 0, and 5 % 2 returns 1.
Use Style 3 — Arrow Function.
Paste your code and output when done.
*/

const isEven = (num) => {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(isEven(10));
