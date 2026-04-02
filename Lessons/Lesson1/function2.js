/*

``` Style1: Function Declaration
function greet(name) {
    return "Hello " + name; 
};



``` Style2: Function Expression ( storing a function in a variable)
const greet = function(name) {
    return "Hello " + name;
};



``` Style3: Arrow Function (modern shorthand, common in Node,Js)
const greet = (name) => {
    return "Hello " + name;
};*/

/*
Write these yourself:

Declare a function called add that takes two parameters — a and b — and returns their sum
Declare a function called greetUser that takes one parameter — username — and returns the string "Welcome " + username
Call both functions and print the results with console.log()

Run with node functions.js and paste your code and output here.*/

// Style 1: Function Declaraton
function add1(a, b) {
  return a + b;
}

console.log(add1(5, 7));

// Style 2: Function Expression
const greetUser = function (userName) {
  return "Welcome " + userName;
};

console.log(greetUser("ddevmetal"));

// Style 3: Arrow Function
const greet = (name) => {
  return "Welcome " + name;
};

console.log(greet("ddevmetal2"));
