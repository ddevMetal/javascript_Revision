# JavaScript Fundamentals
## Chapter 1 — Variables, Data Types & Functions

> **Who this is for:** Anyone starting JavaScript with some prior programming exposure (Java, Python, etc.). Written from real learning sessions — theory, context, exercises, and solutions included.

---

## Table of Contents

1. [What is JavaScript?](#1-what-is-javascript)
2. [The Past, Present and Future of JavaScript](#2-the-past-present-and-future-of-javascript)
3. [Where JavaScript Lives Today](#3-where-javascript-lives-today)
4. [Setting Up Your Practice Environment](#4-setting-up-your-practice-environment)
5. [Session 1 — Variables](#5-session-1--variables)
6. [Session 2 — Data Types](#6-session-2--data-types)
7. [Session 3 — Functions](#7-session-3--functions)
8. [Putting It All Together — A Real-World Example](#8-putting-it-all-together--a-real-world-example)
9. [Session Progress Checklist](#9-session-progress-checklist)
10. [Exercises With Solutions](#10-exercises-with-solutions)

---

## 1. What is JavaScript?

JavaScript is a **programming language** that runs in two environments:

- **The browser** — makes websites interactive (buttons, forms, animations, live updates)
- **The server** — via Node.js, it runs backend logic, APIs, and databases

It is the only programming language that runs natively in every web browser in the world. That alone makes it one of the most widely deployed languages in existence.

### The one-line definition

> JavaScript is a lightweight, interpreted, dynamically-typed programming language with first-class functions.

Let's unpack that:

| Term | What it means |
|------|---------------|
| **Lightweight** | Small runtime, low overhead — designed to run in a browser |
| **Interpreted** | Code is executed line by line at runtime, not compiled ahead of time |
| **Dynamically-typed** | Variables don't have fixed types — a variable can hold a string, then a number |
| **First-class functions** | Functions can be stored in variables, passed as arguments, and returned from other functions |

### Comparison with Java

If you come from Java, here is the mental shift:

| Java | JavaScript |
|------|------------|
| Statically typed | Dynamically typed |
| `int x = 5;` | `let x = 5;` |
| Methods inside classes | Functions are standalone values |
| Compiled to bytecode | Interpreted at runtime |
| `System.out.println()` | `console.log()` |
| OOP is enforced | OOP is optional |

---

## 2. The Past, Present and Future of JavaScript

### The Past — Birth and Chaos (1995–2009)

JavaScript was written in **10 days** in 1995 by **Brendan Eich** at Netscape. It was originally called **Mocha**, then **LiveScript**, then renamed **JavaScript** — a marketing decision to ride the popularity of Java, despite the two languages having almost nothing in common.

In 1997, the language was standardised as **ECMAScript** by the ECMA International standards body. The official name of the language is ECMAScript. "JavaScript" is a trademark — the name we all use anyway.

For its first decade, JavaScript had a bad reputation. It was inconsistent across browsers, had many design bugs, and was used mostly for small tricks like pop-up alerts. Developers did not take it seriously.

The **2006 arrival of jQuery** changed perception — it made cross-browser JavaScript manageable. But it was still primarily a browser-side tool.

### The Present — Everywhere (2009–now)

Two things changed everything:

**Node.js (2009)** — Ryan Dahl took the V8 JavaScript engine (from Chrome) and ran it outside the browser. Suddenly JavaScript could run on a server. You could write your entire application — frontend and backend — in one language.

**ES6 / ES2015** — The 2015 update to the ECMAScript specification was the biggest overhaul in the language's history. It introduced `let`, `const`, arrow functions, classes, promises, template literals, destructuring, modules, and more. Modern JavaScript essentially starts here.

Today JavaScript is:

- The most used programming language in the world (Stack Overflow survey, multiple years running)
- The language of the browser — no alternative
- A major backend language via Node.js
- The foundation of frameworks like React, Vue, Angular (frontend) and Express, NestJS (backend)

### The Future — Evolving Standards

ECMAScript releases a new version **every year**. Recent additions include:

- `async/await` (ES2017) — cleaner async code
- Optional chaining `?.` (ES2020) — safe property access
- Top-level `await` (ES2022) — await outside async functions

JavaScript is not going away. The web runs on it. If anything, it is expanding — into desktop apps (Electron), mobile apps (React Native), edge computing, and AI tooling.

---

## 3. Where JavaScript Lives Today

### The Modern Web Development Stack

```
┌─────────────────────────────────────────────────────┐
│                   BROWSER (Client)                  │
│   HTML — structure                                  │
│   CSS  — style                                      │
│   JS   — behaviour / interactivity                  │
└───────────────────────┬─────────────────────────────┘
                        │ HTTP requests
┌───────────────────────▼─────────────────────────────┐
│                   SERVER (Node.js)                  │
│   Express / NestJS — routing, APIs                  │
│   Business logic — authentication, data processing  │
└───────────────────────┬─────────────────────────────┘
                        │ queries
┌───────────────────────▼─────────────────────────────┐
│                   DATABASE                          │
│   MongoDB, PostgreSQL, MySQL, etc.                  │
└─────────────────────────────────────────────────────┘
```

JavaScript is the **only language** that operates at all three layers — browser, server, and increasingly at the database layer (MongoDB uses JS for queries).

### Key Frameworks and Tools

| Layer | Tool | What it does |
|-------|------|-------------|
| Frontend | React | UI component library — most popular |
| Frontend | Vue | Lighter alternative to React |
| Frontend | Angular | Full framework by Google |
| Backend | Express | Minimal Node.js web framework |
| Backend | NestJS | Structured backend framework |
| Runtime | Node.js | Runs JS outside the browser |
| Package manager | npm | Installs JavaScript libraries |
| Bundler | Webpack / Vite | Packages code for production |

### What You Are Learning

This course focuses on **vanilla JavaScript** — pure JS with no frameworks. This is the right starting point because every framework is just JavaScript underneath. If you understand the fundamentals, frameworks become learnable in days rather than months.

---

## 4. Setting Up Your Practice Environment

No browser needed for Chapters 1–5. Everything runs in the terminal via Node.js.

### Check Node.js is installed

```bash
node -v
```

You should see a version number like `v20.19.2`. If not, install Node.js from [nodejs.org](https://nodejs.org).

### Create a working folder

```bash
mkdir javaScript_Revision
cd javaScript_Revision
```

### Create and run a practice file

```bash
# Create a file
micro practice.js    # or nano, vim, nvim — any terminal editor

# Run the file
node practice.js
```

### The Node.js REPL — for quick tests

REPL stands for **Read, Evaluate, Print, Loop**. It is an interactive terminal where you type JavaScript and it runs immediately.

```bash
node        # opens the REPL
> 2 + 2     # type JS directly
4
> .exit     # exit the REPL
```

Use the REPL for quick experiments. Use files for real practice.

---

## 5. Session 1 — Variables

### Theory

A **variable** is a named container that stores a value in memory.

In JavaScript, you declare a variable using one of three keywords: `var`, `let`, or `const`. Each differs in **scope** (where it can be accessed) and **reassignability** (whether its value can change).

> **Reassign** means: giving a variable a new value after it has already been declared.

### The three keywords

```js
const country = "Singapore";   // cannot be reassigned
let year = 2026;                // can be reassigned
var oldStyle = "avoid this";   // old syntax — avoid in modern JS
```

### `const` — use when the value never changes

```js
const PORT = 3000;
const API_KEY = "abc-123";
const appName = "The Briefing Room";
```

Trying to reassign a `const` throws an error:

```js
const name = "ddevmetal";
name = "someone else";   // TypeError: Assignment to constant variable
```

### `let` — use when the value will change

```js
let score = 0;
score = 10;     // reassignment — no keyword, just the name
score = 20;     // again — allowed

let isLoggedIn = false;
isLoggedIn = true;   // allowed
```

### `var` — avoid

`var` is the original declaration keyword from 1995. It has function-scoped behaviour that causes subtle bugs. `let` and `const` were introduced in ES6 (2015) to replace it. You will see `var` in old tutorials and legacy codebases — recognise it, but do not use it.

### Summary table

| Keyword | Reassignable? | Scope | Use when |
|---------|--------------|-------|----------|
| `const` | No | Block | Value never changes |
| `let` | Yes | Block | Value needs to update |
| `var` | Yes | Function | Avoid — old style |

### Naming conventions

- Use **camelCase** for variables: `myName`, `totalScore`, `isLoggedIn`
- Use **UPPER_SNAKE_CASE** for constants that are configuration: `PORT`, `API_KEY`
- Variable names are case-sensitive: `name` and `Name` are different variables

### Real-world usage — Node.js / Express

```js
const PORT = 3000;              // server config — never changes
const DB_URL = "mongodb://..."; // connection string — never changes
let requestCount = 0;           // tracks requests — changes every request

app.listen(PORT, () => {
    requestCount++;
    console.log(`Server running on port ${PORT}`);
});
```

---

## 6. Session 2 — Data Types

### Theory

A **data type** tells JavaScript what kind of value a variable holds. JavaScript has **7 primitive data types**.

Unlike Java, JavaScript does not require you to declare the type when you create a variable. The type is determined automatically from the value you assign. This is called **dynamic typing**.

```java
// Java — you must declare the type
int age = 30;
String name = "ddevmetal";

// JavaScript — type is inferred automatically
let age = 30;
let name = "ddevmetal";
```

### The 7 data types

| Type | Example | Notes |
|------|---------|-------|
| `string` | `"Hello"`, `'World'` | Text — single or double quotes, or backticks |
| `number` | `42`, `3.14`, `-7` | All numbers — integers and decimals are the same type |
| `boolean` | `true`, `false` | Only two values — lowercase |
| `null` | `null` | Intentional emptiness — you set this deliberately |
| `undefined` | (no value assigned) | JS sets this automatically |
| `object` | `{ name: "dev" }` | Key-value pairs — covered in Chapter 2 |
| `array` | `[1, 2, 3]` | Ordered list — technically a type of object — covered in Chapter 2 |

### The `typeof` operator

`typeof` is a built-in JavaScript operator that returns the data type of a value as a string.

```js
console.log(typeof "hello");       // "string"
console.log(typeof 42);            // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object"  ← known bug
console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
```

### `null` vs `undefined`

These are two of the most confused concepts in JavaScript.

| | `null` | `undefined` |
|-|--------|-------------|
| Who sets it? | You — the developer | JavaScript — automatically |
| What does it mean? | Intentionally empty | Not yet assigned |
| Analogy | An empty box you deliberately left empty | A box that was never filled |

```js
let middleName = null;     // I know this person has no middle name
let futureScore;           // declared but not yet set — JS assigns undefined
```

### The `null` bug — a note on JavaScript history

`typeof null` returns `"object"` instead of `"null"`. This is a **bug from 1995** that was never fixed because millions of websites had already been written relying on this behaviour. Fixing it would break the entire web.

To correctly check for null, use strict equality instead:

```js
let nickname = null;
console.log(typeof nickname);       // "object"  ← the bug
console.log(nickname === null);     // true       ← correct check
```

### Numbers in JavaScript vs Java

Java has separate types for integers and decimals: `int`, `long`, `float`, `double`. JavaScript has one type for all numbers: `number`.

```js
let age = 30;          // integer — typeof returns "number"
let price = 19.99;     // decimal — typeof still returns "number"
```

### Real-world usage — type checking in Express

```js
// Check the type of incoming request data before processing
app.post("/register", (req, res) => {
    const { username, age } = req.body;

    if (typeof username !== "string") {
        return res.status(400).send("username must be a string");
    }
    if (typeof age !== "number") {
        return res.status(400).send("age must be a number");
    }

    // proceed safely
});
```

---

## 7. Session 3 — Functions

### Theory

A **function** is a reusable block of code that performs a specific task. You define it once and **call** it whenever you need it.

In Java, this concept is called a **method**. In JavaScript, functions are more powerful — they are **first-class values**, meaning you can store them in variables, pass them as arguments, and return them from other functions. (This is covered in depth in Chapter 3 — Higher-Order Functions.)

### Key terminology

| Term | Definition |
|------|-----------|
| **Define / Declare** | Writing the function — setting it up |
| **Call / Invoke** | Running the function |
| **Parameter** | A placeholder variable in the function definition |
| **Argument** | The actual value passed when the function is called |
| **Return value** | The value the function sends back to the caller |

```js
function add(a, b) {    // a and b are PARAMETERS — placeholders
    return a + b;
}

add(5, 7);              // 5 and 7 are ARGUMENTS — actual values
```

> **Parameter** = the blank field on a form (`Name: ___`)
> **Argument** = what you write in (`Name: ddevmetal`)

### Three ways to write a function

JavaScript has three syntax styles. All three do the same thing — they differ in syntax and context.

#### Style 1 — Function Declaration

```js
function greet(name) {
    return "Hello " + name;
}

console.log(greet("ddevmetal"));   // Hello ddevmetal
```

This is the classic style. The function is **hoisted** — meaning JavaScript moves the declaration to the top of its scope, so you can call it before it appears in the file.

#### Style 2 — Function Expression

```js
const greet = function(name) {
    return "Hello " + name;
};

console.log(greet("ddevmetal"));   // Hello ddevmetal
```

The function is stored in a variable. Not hoisted — you must define it before calling it. The `function` keyword here is **anonymous** — the variable name `greet` is how you call it.

#### Style 3 — Arrow Function (ES6)

```js
const greet = (name) => {
    return "Hello " + name;
};

console.log(greet("ddevmetal"));   // Hello ddevmetal
```

Modern shorthand, introduced in ES6 (2015). Common in Node.js and all modern JavaScript. Not just a style choice — arrow functions also behave differently with the `this` keyword (covered in Chapter 6 — OOP).

### Comparison table

| Style | Hoisted? | `this` binding | Common use |
|-------|----------|----------------|------------|
| Declaration | Yes | Dynamic | General functions |
| Expression | No | Dynamic | Storing functions |
| Arrow | No | Lexical (inherited) | Callbacks, modern code |

### Template literals — bonus concept

When building strings that include variables, you have two options:

```js
// Old way — concatenation with +
const msg = "Hello " + name + ", you are " + age + " years old.";

// Modern way — template literals (ES6)
const msg = `Hello ${name}, you are ${age} years old.`;
```

Template literals use **backticks** (`` ` ``) instead of quotes. Variables are inserted using `${}` — this is called **string interpolation**.

Use template literals. They are cleaner, easier to read, and less error-prone.

### Strict equality — `===` vs `==`

JavaScript has two equality operators:

| Operator | Name | What it checks |
|----------|------|---------------|
| `===` | Strict equality | Value **and** type must match |
| `==` | Loose equality | Value only — will coerce types |

```js
5 === 5       // true
5 === "5"     // false — different types
5 == "5"      // true  — loose, coerces "5" to 5 first
```

**Always use `===` in JavaScript.** Loose equality (`==`) causes subtle bugs that are hard to track down. This is a rule, not a preference.

### Real-world usage — Express route handler

Arrow functions are everywhere in Node.js. Every Express route uses them:

```js
// The (req, res) => {} part is an arrow function passed as an argument
app.get("/users", (req, res) => {
    res.send("user list");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    // validate and respond
});
```

`req` is the **request** object — incoming data from the client.
`res` is the **response** object — what you send back.

---

## 8. Putting It All Together — A Real-World Example

This example uses everything from Sessions 1–3 in a pattern you will actually write in a Node.js backend — a simple login checker.

```js
// ─── Variables (Session 1) ───────────────────────────────────────────────────

const STORED_USERNAME = "ddevmetal";   // const — credentials never change
const STORED_PASSWORD = "abc123";
let isLoggedIn = false;                // let — will change on successful login
let loginAttempts = 0;                 // let — increments each attempt
const MAX_ATTEMPTS = 3;               // const — limit never changes

// ─── Function (Session 3) ────────────────────────────────────────────────────

function checkLogin(username, password) {

    // Data types + typeof check (Session 2)
    if (typeof username !== "string" || typeof password !== "string") {
        return "Error: username and password must be strings";
    }

    loginAttempts++;   // increment the counter

    if (loginAttempts > MAX_ATTEMPTS) {
        return "Account locked — too many failed attempts";
    }

    // Strict equality check (Session 3)
    if (username === STORED_USERNAME && password === STORED_PASSWORD) {
        isLoggedIn = true;
        return `Welcome back, ${username}! You are now logged in.`;
    } else {
        return `Login failed. Attempt ${loginAttempts} of ${MAX_ATTEMPTS}.`;
    }
}

// ─── Calling the function ────────────────────────────────────────────────────

console.log(checkLogin("ddevmetal", "wrongpass"));
// Login failed. Attempt 1 of 3.

console.log(checkLogin("ddevmetal", "wrongpass"));
// Login failed. Attempt 2 of 3.

console.log(checkLogin("ddevmetal", "abc123"));
// Welcome back, ddevmetal! You are now logged in.

console.log(`Login status: ${isLoggedIn}`);
// Login status: true

console.log(checkLogin(12345, true));
// Error: username and password must be strings
```

### What this demonstrates

- `const` for values that should never change (credentials, limits)
- `let` for values that update during the program (attempts, login state)
- `typeof` to validate input before processing
- `===` for strict comparison
- Template literals for readable string output
- A function that takes parameters, processes data, and returns a result
- Real logic: attempt counting, input validation, access control

---

## 9. Session Progress Checklist

After completing these sessions, you should be able to:

### Variables
- [ ] Declare variables using `let` and `const`
- [ ] Explain the difference between `let` and `const` in your own words
- [ ] Use the correct keyword based on whether the value will change
- [ ] Explain why `var` is avoided in modern JavaScript
- [ ] Use the term **reassignment** correctly

### Data Types
- [ ] Name all 7 JavaScript data types from memory
- [ ] Use `typeof` to check the type of a variable
- [ ] Explain the difference between `null` and `undefined`
- [ ] Explain the `typeof null` bug and how to work around it
- [ ] Explain why JavaScript has one `number` type while Java has several

### Functions
- [ ] Write a function in all three styles: declaration, expression, arrow
- [ ] Explain the difference between a **parameter** and an **argument**
- [ ] Use `return` to send a value back from a function
- [ ] Use template literals with backticks and `${}`
- [ ] Explain why `===` is used instead of `==`

---

## 10. Exercises With Solutions

Work through these in order. Write your own code first — do not read the solution until you have tried.

---

### Exercise 1 — Variables

**Task:** Declare the following variables. Use `const` or `let` based on whether each value should change. Then print all of them.

- Your name
- The current year (and then update it to next year)
- Whether you are a student

**Solution:**

```js
const myName = "ddevmetal";
let currentYear = 2026;
let isStudent = true;

console.log(myName);       // ddevmetal
console.log(currentYear);  // 2026
console.log(isStudent);    // true

currentYear = 2027;        // reassignment — no keyword
console.log(currentYear);  // 2027
```

---

### Exercise 2 — Data Types

**Task:** Declare 5 variables of 5 different types. Use `typeof` to print the type of each.

**Solution:**

```js
const city = "Geylang";
const temperature = 31.5;
let isRaining = false;
let nickname = null;
let futureScore;

console.log(typeof city);          // string
console.log(typeof temperature);   // number
console.log(typeof isRaining);     // boolean
console.log(typeof nickname);      // object  ← null bug
console.log(typeof futureScore);   // undefined
```

---

### Exercise 3 — Function Declaration

**Task:** Write a function called `multiply` that takes two parameters `a` and `b` and returns their product. Call it and print the result.

**Solution:**

```js
function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5));   // 20
console.log(multiply(7, 3));   // 21
```

---

### Exercise 4 — Function Expression + Template Literal

**Task:** Write a function called `userProfile` using a function expression. It takes `name` and `age` as parameters and returns a sentence using a template literal.

**Solution:**

```js
const userProfile = function(name, age) {
    return `${name} is ${age} years old`;
};

console.log(userProfile("ddevmetal", 30));   // ddevmetal is 30 years old
console.log(userProfile("Alice", 25));       // Alice is 25 years old
```

---

### Exercise 5 — Arrow Function + Modulus

**Task:** Write an arrow function called `isEven` that takes one parameter `num` and returns `"even"` if the number is even and `"odd"` if it is odd.

Hint: `num % 2` returns `0` if even, `1` if odd.

**Solution:**

```js
const isEven = (num) => {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
};

console.log(isEven(10));   // even
console.log(isEven(7));    // odd
console.log(isEven(0));    // even
```

---

### Exercise 6 — Combining Concepts

**Task:** Write a function called `findLargest` that takes three parameters `a`, `b`, `c` and returns the largest of the three.

**Solution:**

```js
function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(findLargest(19, 200, 9999));   // 9999
console.log(findLargest(100, 50, 75));     // 100
console.log(findLargest(3, 3, 2));         // 3
```

---

### Exercise 7 — Full Integration

**Task:** Write a function called `checkLogin` that:
- Takes `username` and `password` as parameters
- Returns an error message if either is not a string
- Returns `"Access granted"` if username is `"admin"` and password is `"pass123"`
- Returns `"Access denied"` otherwise

Test it with: correct credentials, wrong password, and a non-string input.

**Solution:**

```js
function checkLogin(username, password) {
    if (typeof username !== "string" || typeof password !== "string") {
        return "Error: both fields must be strings";
    }

    if (username === "admin" && password === "pass123") {
        return `Access granted. Welcome, ${username}!`;
    } else {
        return "Access denied. Invalid credentials.";
    }
}

console.log(checkLogin("admin", "pass123"));    // Access granted. Welcome, admin!
console.log(checkLogin("admin", "wrongpass"));  // Access denied. Invalid credentials.
console.log(checkLogin(123, true));             // Error: both fields must be strings
```

---

## What's Next — Chapter 2 Preview

Chapter 2 covers **Scope** and **Arrays & Objects** — where variables can be accessed, and how to work with collections of data.

These topics are the foundation of everything that follows: loops, callbacks, and eventually the full Express request/response cycle.

---

*Notes authored by ddevmetal · April 2026*
*JavaScript learning sessions with Claude · Tier 1 — Foundations*
*Next: Chapter 2 — Scope, Arrays & Objects*
