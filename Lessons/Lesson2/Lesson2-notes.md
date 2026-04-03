# Lesson 2

---

Scope

    - Scope is the area of your code where a variable can be accessed.
    - If variable out of scope, JS cannot see it -- it does not exists in location

3 Types of Scope: 1) Global Scope 2) Local Scope 3) Block Scope

## Global Scope

- Declare outside any function or block, accessible everywhere.

Example:

const name = "Global Scope"; // declaring a global variable

function getName () {
console.log(name); // can assess the global variable
}

getName(); // using the function

---

## Local Scope (Function Scope)

- Declare inside a functio. Only accessible within the function

Example:

fucntion getName() {
const name = "Local Scope"; // variable is declared inside the function "Local"
console.log(name);
};

getName();

---

## Block Scope

- Declare inside a block `{  }` using let or const, only accessible within that block

Example:

if (true) {
let blockVar1 = "I am block scoped";
console.log(blockVar);
} else {
let blockVar2 = "I am another block var in another block scope"
};

if statement true -> access blockVar1
if statement false -> access blockVar2

================================================================================

## WHY is 'var' Dangerous?

- scope controls the level of accessed allowed in a code. e.g., some variable like password, or something that doesn't allow
  tempering, using const will prevent from overriding. whereas Let, allows tempering because the value is dynamic.

- which explains why there is the "level of access" the variable can to prevent from unwanted behaviour in code. like for example,
  the developer wants the value to be manipulate within a block code. so it can only access at block code level etc..

- But var, it allows acess to all 3 level, if the global variable is the same as block, it will either confuse JS, or it will
  override something?
