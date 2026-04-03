# JavaScript Fundamentals
## Chapter 2 — Scope

> **Prerequisite:** Chapter 1 — Variables, Data Types, Functions
> **Who this is for:** Anyone who has learned to declare variables and write functions and now wants to understand where those variables can actually be used.

---

## Table of Contents

1. [What is Scope?](#1-what-is-scope)
2. [Why Scope Exists — The Theory](#2-why-scope-exists--the-theory)
3. [Global Scope](#3-global-scope)
4. [Local Scope (Function Scope)](#4-local-scope-function-scope)
5. [Block Scope](#5-block-scope)
6. [Why `var` is Dangerous](#6-why-var-is-dangerous)
7. [Variable Shadowing](#7-variable-shadowing)
8. [Encapsulation](#8-encapsulation)
9. [Scope in the Real World — Node.js / Express](#9-scope-in-the-real-world--nodejs--express)
10. [Putting It All Together](#10-putting-it-all-together)
11. [Session Progress Checklist](#11-session-progress-checklist)
12. [Exercises With Solutions](#12-exercises-with-solutions)

---

## 1. What is Scope?

**Scope** is the area of your code where a variable is accessible. If you try to access a variable outside its scope, JavaScript throws a `ReferenceError` — it simply cannot see that variable from where you are standing.

### The one-line definition

> Scope is the set of rules that determines where in your code a variable can be read or written.

### The building analogy

Think of your codebase as a building:

- **Global scope** is the main hall — everything declared here is visible from every room
- **Function scope** is a private office — variables declared inside belong only to that room
- **Block scope** is a locked cabinet inside that office — only accessible while you're at that specific desk

If you're standing in the main hall and try to reach into a locked cabinet in a private office — JavaScript stops you with a `ReferenceError`.

---

## 2. Why Scope Exists — The Theory

Scope is not a limitation — it is a **feature**. It exists to solve real problems:

### Problem 1 — Name collisions

In a large application, multiple developers write functions. Without scope, every variable would be global and names would constantly clash:

```js
// Without scope — two functions both use `count`
// They would overwrite each other's values
let count = 0;

function trackClicks() { count++; }
function trackLogins() { count++; }  // same variable — bug
```

With scope, each function has its own `count` that doesn't interfere with the other.

### Problem 2 — Security and access control

Some data should only be accessible in specific places. A user's password should only exist inside the authentication function — not floating globally where any piece of code could read it.

### Problem 3 — Memory management

Variables take up memory. When a function finishes, its local variables are destroyed and memory is freed. If all variables were global, they would live forever — memory usage would grow continuously.

### The principle — Principle of Least Privilege

> Give code access only to what it needs, and nothing more.

This is a fundamental principle in software engineering and security. Scope is how JavaScript enforces it.

---

## 3. Global Scope

A variable declared **outside** any function or block is in the global scope. It is accessible from anywhere in the file.

```js
const appName = "MyApp";       // global scope
let userCount = 0;             // global scope

function displayApp() {
    console.log(appName);      // ✅ accessible — appName is global
    userCount++;               // ✅ accessible — userCount is global
}

function logCount() {
    console.log(userCount);    // ✅ accessible — userCount is global
}

displayApp();
logCount();
```

### When to use global scope

Use global scope sparingly. Good candidates are:

- Configuration constants: `const PORT = 3000`
- App-wide settings: `const APP_NAME = "MyApp"`
- Counters or state that genuinely needs to be shared across functions

**Avoid** putting everything in global scope — it leads to the name collision and security problems described above.

---

## 4. Local Scope (Function Scope)

A variable declared **inside a function** using `let` or `const` is in local (function) scope. It only exists within that function and is destroyed when the function finishes.

```js
function greetUser() {
    const message = "Hello, welcome!";   // local scope
    console.log(message);                // ✅ works — inside the function
}

greetUser();
console.log(message);   // ❌ ReferenceError: message is not defined
```

### The lifetime of a local variable

```
greetUser() is called
    → message is created in memory
    → console.log(message) runs
greetUser() finishes
    → message is destroyed
    → memory is freed
console.log(message) runs
    → message no longer exists → ReferenceError
```

### Java comparison

This is identical behaviour to Java local variables:

```java
public void greetUser() {
    String message = "Hello";   // local to this method
}
System.out.println(message);    // compile error — same concept
```

The difference: Java catches this at **compile time**. JavaScript catches it at **runtime** — only when the line actually executes.

---

## 5. Block Scope

A **block** is any pair of curly braces `{ }`. This includes `if` statements, `for` loops, `while` loops, and standalone blocks.

Variables declared inside a block with `let` or `const` are **block-scoped** — they only exist within that block.

```js
if (true) {
    let blockMessage = "I am inside the block";
    console.log(blockMessage);   // ✅ works — inside the block
}

console.log(blockMessage);       // ❌ ReferenceError: blockMessage is not defined
```

### Block scope in loops

This is where block scope becomes very practical:

```js
for (let i = 0; i < 3; i++) {
    console.log(i);   // ✅ 0, 1, 2
}

console.log(i);       // ❌ ReferenceError — i only existed inside the loop
```

The loop counter `i` is properly contained — it doesn't leak out and pollute the surrounding code.

---

## 6. Why `var` is Dangerous

`var` is the original variable declaration keyword from 1995. Unlike `let` and `const`, `var` is **function-scoped**, not block-scoped. This means it ignores `if`, `for`, and `while` blocks and leaks out into the surrounding function or global scope.

### The leak demonstrated

```js
if (true) {
    var leaked = "I escaped the block";    // var ignores block scope
    let contained = "I stayed inside";     // let respects block scope
}

console.log(leaked);      // ✅ "I escaped the block" — var leaked out
console.log(contained);   // ❌ ReferenceError — let stayed inside
```

### Why this causes bugs — a realistic example

```js
var count = 10;   // global count

function processItems() {
    for (var count = 0; count < 5; count++) {
        // var count leaks out of the for loop
        // it overwrites the global count variable
    }
}

processItems();
console.log(count);   // 5 — the global was overwritten. Bug.
```

With `let`:

```js
let count = 10;   // global count

function processItems() {
    for (let count = 0; count < 5; count++) {
        // let count stays inside the for loop
        // the global count is untouched
    }
}

processItems();
console.log(count);   // 10 — global is safe. Correct.
```

### The rule

> Never use `var`. Always use `const` by default. Use `let` when reassignment is needed.

---

## 7. Variable Shadowing

**Shadowing** occurs when a variable in an inner scope has the same name as a variable in an outer scope. The inner variable temporarily hides the outer one within its scope.

```js
const username = "globalUser";   // outer scope

function displayUser() {
    const username = "localUser";       // inner scope — shadows the global
    console.log(username);             // "localUser" — sees the local one
}

displayUser();
console.log(username);   // "globalUser" — global is untouched
```

### Why shadowing matters

This is why passing a variable as a parameter when the same variable exists globally does not test global access — it creates a shadow:

```js
const siteName = "MyApp";

function displaySite(siteName) {   // parameter shadows the global
    console.log(siteName);         // prints the argument, not the global
}

displaySite("SomethingElse");   // "SomethingElse" — not testing global access
```

To actually test global access, remove the parameter:

```js
function displaySite() {           // no parameter
    console.log(siteName);         // now reads the global
}
```

---

## 8. Encapsulation

**Encapsulation** is the practice of containing variables and logic within the scope where they are needed, preventing unintended access or modification from outside that scope.

Scope is JavaScript's mechanism for enforcing encapsulation.

### Why it matters

- A helper function should only have access to what it needs
- Variables should live and die within the context they serve
- Prevents one part of the code from accidentally breaking another

### In one sentence

> Encapsulation means keeping variables contained to where they belong — so they can't leak out and cause unintended behaviour elsewhere.

---

## 9. Scope in the Real World — Node.js / Express

### Route handler scope

In Express, each route handler is a function. Variables declared inside are scoped to that request — they don't leak into other routes:

```js
app.get("/login", (req, res) => {
    let userId = req.body.id;       // scoped to this route handler
    let sessionToken = generateToken();   // scoped to this route handler
    res.send({ token: sessionToken });
});

app.get("/dashboard", (req, res) => {
    console.log(userId);    // ❌ ReferenceError — userId doesn't exist here
    // each request is isolated — correct behaviour
});
```

This is security by design. A user's session data from one request cannot accidentally leak into another request's handler.

### Configuration in global scope

```js
// Global scope — shared across the entire app
const PORT = 3000;
const DB_URL = process.env.DATABASE_URL;
const APP_NAME = "The Briefing Room";

// These are safe to be global — they are read-only config
// declared with const so they cannot be accidentally reassigned
```

### Local scope for sensitive operations

```js
function authenticateUser(inputPassword) {
    const hashedInput = hashPassword(inputPassword);    // local — never leaks
    const storedHash = getStoredHash();                 // local — never leaks

    return hashedInput === storedHash;
    // hashedInput and storedHash are destroyed after this function returns
    // they never exist outside this function — correct security behaviour
}
```

---

## 10. Putting It All Together

This example demonstrates all three scope types working together in a realistic pattern:

```js
// ─── Global Scope ────────────────────────────────────────────────────────────
const APP_NAME = "SecureApp";      // config — global, read-only
const MAX_LOGIN_ATTEMPTS = 3;      // config — global, read-only
let totalLoginAttempts = 0;        // counter — global, needs updating

// ─── Function Scope ──────────────────────────────────────────────────────────
function attemptLogin(username, password) {

    // local variables — only exist inside this function
    const validUsername = "admin";
    const validPassword = "secret123";
    let result;

    // ─── Block Scope ─────────────────────────────────────────────────────────
    if (typeof username !== "string" || typeof password !== "string") {
        let errorMessage = "Invalid input type";   // block scoped
        return errorMessage;
        // errorMessage is destroyed here
    }

    totalLoginAttempts++;   // modifying global counter — intentional

    if (totalLoginAttempts > MAX_LOGIN_ATTEMPTS) {
        let lockMessage = `${APP_NAME}: Account locked`;   // block scoped
        return lockMessage;
        // lockMessage is destroyed here
    }

    if (username === validUsername && password === validPassword) {
        result = `Welcome to ${APP_NAME}, ${username}!`;
    } else {
        result = `Login failed. Attempt ${totalLoginAttempts} of ${MAX_LOGIN_ATTEMPTS}.`;
    }

    return result;
    // validUsername, validPassword, result are destroyed here
}

// ─── Calling the function ────────────────────────────────────────────────────
console.log(attemptLogin("admin", "wrongpass"));
// Login failed. Attempt 1 of 3.

console.log(attemptLogin("admin", "wrongpass"));
// Login failed. Attempt 2 of 3.

console.log(attemptLogin("admin", "secret123"));
// Welcome to SecureApp, admin!

console.log(`Total attempts recorded: ${totalLoginAttempts}`);
// Total attempts recorded: 3

// These would all throw ReferenceError — correctly out of scope:
// console.log(validUsername);   // ❌ local to attemptLogin
// console.log(result);          // ❌ local to attemptLogin
// console.log(errorMessage);    // ❌ local to the if block
// console.log(lockMessage);     // ❌ local to the if block
```

### What this demonstrates

| Variable | Scope | Why |
|----------|-------|-----|
| `APP_NAME` | Global | Config shared across entire app |
| `MAX_LOGIN_ATTEMPTS` | Global | Limit used in multiple places |
| `totalLoginAttempts` | Global | Counter that persists across calls |
| `validUsername` | Local (function) | Only needed inside `attemptLogin` |
| `result` | Local (function) | Only needed inside `attemptLogin` |
| `errorMessage` | Block | Only needed inside the type-check block |
| `lockMessage` | Block | Only needed inside the lockout block |

---

## 11. Session Progress Checklist

After completing this chapter, you should be able to:

- [ ] Define scope in your own words without notes
- [ ] Name the three types of scope in JavaScript
- [ ] Explain what happens when you try to access a variable outside its scope
- [ ] Explain why `var` is dangerous and how it differs from `let`/`const`
- [ ] Explain variable shadowing and demonstrate it in code
- [ ] Define encapsulation in one sentence
- [ ] Write a function that uses all three scope types deliberately
- [ ] Explain why local scope is a security feature in Express route handlers

---

## 12. Exercises With Solutions

---

### Exercise 1 — Global and Local Scope

**Task:** Declare a global variable `siteName`. Write a function `displaySite` that accesses it without a parameter. Declare a local variable inside the function. Try to access the local variable outside the function.

**Expected result:** Function runs fine. Outside access throws `ReferenceError`.

**Solution:**

```js
const siteName = "MyApp";   // global scope

function displaySite() {
    console.log(siteName);             // ✅ accesses global
    let localMessage = "I am local";   // local scope
    console.log(localMessage);         // ✅ works inside
}

displaySite();
console.log(localMessage);   // ❌ ReferenceError: localMessage is not defined
```

**Output:**
```
MyApp
I am local
ReferenceError: localMessage is not defined
```

---

### Exercise 2 — Block Scope

**Task:** Declare a variable inside an `if` block using `let`. Print it inside the block. Then try to print it outside the block.

**Solution:**

```js
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar);    // ✅ works inside the block
}

console.log(blockVar);        // ❌ ReferenceError: blockVar is not defined
```

---

### Exercise 3 — `var` vs `let` leak demonstration

**Task:** Demonstrate the difference between `var` and `let` inside an `if` block.

**Solution:**

```js
if (true) {
    var varVariable = "I use var";
    let letVariable = "I use let";
}

console.log(varVariable);   // "I use var" — leaked out of block
console.log(letVariable);   // ❌ ReferenceError — stayed inside block
```

---

### Exercise 4 — Variable Shadowing

**Task:** Declare a global variable `username`. Write a function that declares a local variable with the same name. Show that the global is unchanged after the function runs.

**Solution:**

```js
const username = "globalUser";

function showLocalUser() {
    const username = "localUser";    // shadows the global
    console.log(username);           // "localUser"
}

showLocalUser();
console.log(username);   // "globalUser" — global unchanged
```

---

### Exercise 5 — Full Integration

**Task:** Write a function `processOrder` that:
- Reads a global `TAX_RATE` constant
- Declares a local `subtotal` variable
- Uses a block-scoped variable inside an `if` to calculate a discount
- Returns the final price

**Solution:**

```js
const TAX_RATE = 0.09;   // global — tax rate never changes

function processOrder(price, isPremiumMember) {
    let subtotal = price;   // local — only needed inside this function

    if (isPremiumMember) {
        let discount = price * 0.1;   // block scoped — only needed here
        subtotal = price - discount;
        console.log(`Discount applied: $${discount.toFixed(2)}`);
    }

    const total = subtotal * (1 + TAX_RATE);   // local
    return `Total: $${total.toFixed(2)}`;
}

console.log(processOrder(100, true));
// Discount applied: $10.00
// Total: $98.10

console.log(processOrder(100, false));
// Total: $109.00
```

---

## What's Next — Chapter 3 Preview

Chapter 3 covers **Conditionals** — `if/else`, comparison operators, logical operators, and the ternary operator.

You have already used `if/else` and `&&` in earlier exercises. Chapter 3 makes these formal and introduces the full set of tools for controlling program flow.

---

*Notes authored by ddevmetal · April 2026*
*JavaScript learning sessions with Claude · Tier 1 — Foundations*
*Next: Chapter 3 — Conditionals*
