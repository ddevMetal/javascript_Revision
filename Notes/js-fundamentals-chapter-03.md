# JavaScript Fundamentals
## Chapter 3 — Conditionals & Control Flow

> **Prerequisite:** Chapter 1 — Variables, Data Types, Functions · Chapter 2 — Scope
> **Who this is for:** Anyone who can declare variables and write functions and now wants to control the flow of their program based on conditions.

---

## Table of Contents

1. [What is Control Flow?](#1-what-is-control-flow)
2. [Boolean Expressions — The Foundation](#2-boolean-expressions--the-foundation)
3. [Comparison Operators](#3-comparison-operators)
4. [Logical Operators](#4-logical-operators)
5. [if / else if / else](#5-if--else-if--else)
6. [Short-Circuit Evaluation](#6-short-circuit-evaluation)
7. [The Ternary Operator](#7-the-ternary-operator)
8. [The switch Statement](#8-the-switch-statement)
9. [Defensive Programming — Optional Chaining and Nullish Coalescing](#9-defensive-programming--optional-chaining-and-nullish-coalescing)
10. [Choosing the Right Tool](#10-choosing-the-right-tool)
11. [Real World Usage — Node.js / Express](#11-real-world-usage--nodejs--express)
12. [Putting It All Together](#12-putting-it-all-together)
13. [Session Progress Checklist](#13-session-progress-checklist)
14. [Exercises With Solutions](#14-exercises-with-solutions)

---

## 1. What is Control Flow?

By default, JavaScript runs code top to bottom, one line at a time. **Control flow** is the ability to change that — to make decisions, skip code, or repeat actions based on conditions.

Without control flow, every program would do the exact same thing every time it ran. With it, programs can respond to different inputs, states, and situations.

### The three types of control flow

- **Conditionals** — run different code based on a condition (`if`, `switch`)
- **Loops** — repeat code while a condition is true (`for`, `while`)
- **Functions** — reuse code by calling it from different places

This chapter covers conditionals.

---

## 2. Boolean Expressions — The Foundation

Every conditional in JavaScript is built on a **boolean expression** — an expression that evaluates to either `true` or `false`.

```js
5 > 3           // true
10 === 10       // true
"hello" === ""  // false
age >= 18       // true or false depending on age
```

Boolean expressions are what goes inside the `( )` of an `if` statement. JavaScript evaluates the expression, gets `true` or `false`, and decides which code to run.

---

## 3. Comparison Operators

These operators compare two values and return a boolean.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `===` | Strict equality | `5 === 5` | `true` |
| `!==` | Strict inequality | `5 !== 3` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 8` | `true` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `4 <= 3` | `false` |

### Always use `===` not `==`

JavaScript has two equality operators. Always use `===`:

```js
5 == "5"    // true  — loose equality coerces types first (dangerous)
5 === "5"   // false — strict equality checks value AND type (correct)
```

`==` performs **type coercion** — it converts values before comparing. This causes subtle bugs. `===` never coerces. Use it always.

### Java comparison

In Java, `==` checks reference equality for objects. In JavaScript, `===` is the safe equivalent for all types.

---

## 4. Logical Operators

Logical operators combine or modify boolean expressions.

| Operator | Name | Meaning | Example |
|----------|------|---------|---------|
| `&&` | AND | Both sides must be true | `age >= 18 && hasID === true` |
| `\|\|` | OR | At least one side must be true | `day === "Sat" \|\| day === "Sun"` |
| `!` | NOT | Flips true to false, false to true | `!isLoggedIn` |

```js
true && true    // true
true && false   // false
false || true   // true
false || false  // false
!true           // false
!false          // true
```

### Common pattern — `!` with booleans

```js
let hasID = false;

if (!hasID) {
    console.log("No ID no entry");   // runs because !false is true
}
```

---

## 5. if / else if / else

### Basic `if/else`

```js
const temperature = 35;

if (temperature > 30) {
    console.log("It's hot");
} else {
    console.log("It's cool");
}
```

### `else if` — multiple conditions

When you have more than two outcomes, chain `else if` blocks. JavaScript checks top to bottom and stops at the first true condition.

```js
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
```

### Order matters

Put the most restrictive condition first. If you put `score >= 60` before `score >= 80`, a score of 85 would return `"C"` — wrong.

The `else if` chain works because once a condition is true, all remaining conditions are skipped.

### Redundant conditions — avoid them

```js
// ❌ redundant — score < 80 is already implied by the else if
} else if (score >= 70 && score < 80) {

// ✅ clean — by the time we reach this, score is already < 80
} else if (score >= 70) {
```

---

## 6. Short-Circuit Evaluation

JavaScript uses **short-circuit evaluation** — it stops evaluating as soon as the result is certain.

### With `&&` — stops at first false

```js
false && someFunction()   // someFunction() never called
true && someFunction()    // someFunction() IS called
```

### With `||` — stops at first true

```js
true || someFunction()    // someFunction() never called
false || someFunction()   // someFunction() IS called
```

### Why this matters

```js
function canEnterClub(age, hasID) {
    if (age < 18) {
        return "Too young!";      // stops here if true
    } else if (!hasID) {
        return "No ID no entry";  // only reached if age >= 18
    } else {
        return "Entry granted";
    }
}

canEnterClub(17, false);   // returns "Too young!" — hasID never checked
```

If age is 17, JavaScript hits the first `if` and returns immediately. The `hasID` check is irrelevant — a 17-year-old is too young regardless of ID.

---

## 7. The Ternary Operator

The ternary operator is a one-line shorthand for simple `if/else` decisions.

```js
condition ? valueIfTrue : valueIfFalse
```

```js
// if/else version
let message;
if (age >= 18) {
    message = "Adult";
} else {
    message = "Minor";
}

// ternary version — same result
const message = age >= 18 ? "Adult" : "Minor";
```

### Nested ternary — three outcomes

```js
function canEnterClub(age, hasID) {
    return age < 18 ? "Too young!" : hasID ? "Entry granted" : "No ID no entry";
}
```

Read left to right:
1. Is age < 18? If yes → "Too young!"
2. If no → is hasID true? If yes → "Entry granted"
3. If no → "No ID no entry"

### When to use ternary vs if/else

| Use ternary | Use if/else |
|-------------|-------------|
| Simple two-outcome decision | Complex logic |
| Assigning a value | Multiple statements per branch |
| One-liner is readable | Readability matters more than brevity |

---

## 8. The switch Statement

`switch` is designed for **exact value matching** against multiple cases.

```js
switch (value) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Pass");
        break;
    default:
        console.log("Invalid grade");
}
```

### Key parts

| Part | Purpose |
|------|---------|
| `switch(value)` | The value to match against |
| `case "A":` | Check if value strictly equals "A" |
| `break` | Stop execution — exit the switch |
| `default` | Fallback — runs if no case matches |

### Fall-through — matching multiple cases

When you omit `break`, execution falls through to the next case. This is useful when multiple values should produce the same result:

```js
function getDayType(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday";       // all five fall through to here
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}
```

### `switch(true)` — range matching

You can use `switch(true)` with range comparisons in each case. It works — but `if/else` is cleaner for ranges:

```js
// switch(true) — works but unconventional
switch (true) {
    case score >= 80: return "A";
    case score >= 70: return "B";
    default: return "F";
}

// if/else — cleaner for ranges
if (score >= 80) return "A";
else if (score >= 70) return "B";
else return "F";
```

### When to use switch vs if/else

| Use switch | Use if/else |
|------------|-------------|
| Exact value matching | Range comparisons (`>`, `<`, `>=`) |
| Many cases on same variable | Complex boolean logic |
| Fall-through needed | Different variables per condition |

---

## 9. Defensive Programming — Optional Chaining and Nullish Coalescing

### What is defensive programming?

Defensive programming means writing code that **anticipates bad input** and handles it gracefully instead of crashing.

In real applications, you cannot control what data you receive. Users might send `null`, `undefined`, empty strings, or the wrong type entirely. Defensive code handles all of these without breaking.

> The question a defensive programmer always asks: "What happens if this input is missing or unexpected?"

---

### The problem

```js
function getDayType(day) {
    return day.toLowerCase();   // crashes if day is null or undefined
}

getDayType(null);       // TypeError: Cannot read properties of null
getDayType();           // TypeError: Cannot read properties of undefined
```

---

### Optional Chaining `?.` — ES2020

`?.` calls a method or accesses a property **only if the value exists**. If the value is `null` or `undefined`, it returns `undefined` instead of crashing.

```js
day?.toLowerCase()
```

| Value of `day` | What happens | Result |
|----------------|-------------|--------|
| `"Monday"` | calls `.toLowerCase()` | `"monday"` |
| `null` | skips — returns `undefined` | `undefined` |
| `undefined` | skips — returns `undefined` | `undefined` |

```js
// without ?.
let day = null;
day.toLowerCase();    // ❌ TypeError — crashes

// with ?.
day?.toLowerCase();   // ✅ returns undefined — safe
```

### Nested property access

```js
const user = null;
user.address.city        // ❌ crashes
user?.address?.city      // ✅ returns undefined safely
```

---

### Nullish Coalescing `??` — ES2020

`??` provides a **fallback value** when the left side is `null` or `undefined`.

```js
day?.toLowerCase() ?? ""
```

| Left side result | What `??` does | Final value |
|-----------------|----------------|-------------|
| `"monday"` | has a value — use it | `"monday"` |
| `undefined` | null/undefined — use fallback | `""` |
| `null` | null/undefined — use fallback | `""` |

---

### `??` vs `||` — critical difference

This is a common source of bugs:

```js
const score = 0;

console.log(score || 10);   // 10 — WRONG. 0 is falsy so || replaces it
console.log(score ?? 10);   // 0  — CORRECT. ?? only replaces null/undefined
```

`||` treats `0`, `""`, and `false` as falsy and replaces them.
`??` only replaces `null` and `undefined`.

**Rule: use `??` when 0, false, or empty string are valid values.**

---

### Putting it together

```js
function getDayType(day) {
    switch (day?.toLowerCase() ?? "") {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return "Weekday";
        case "saturday":
        case "sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}

getDayType(null);        // "Invalid day" — no crash
getDayType();            // "Invalid day" — no crash
getDayType("MONDAY");    // "Weekday" — case insensitive
getDayType("monday");    // "Weekday"
```

The defensive chain:
```
getDayType(null)
    → day = null
    → day?.toLowerCase() = undefined   (optional chaining)
    → undefined ?? "" = ""             (nullish coalescing)
    → switch("") → default
    → "Invalid day"                    (graceful — no crash)
```

---

## 10. Choosing the Right Tool

| Situation | Best tool |
|-----------|-----------|
| Two outcomes | `if/else` or ternary |
| Multiple outcomes, ranges | `if/else if/else` |
| Multiple outcomes, exact values | `switch` |
| Simple one-liner assignment | Ternary |
| Safe property/method access | `?.` |
| Fallback for null/undefined | `??` |
| Fallback for any falsy value | `\|\|` |

---

## 11. Real World Usage — Node.js / Express

### Route validation

```js
app.post("/register", (req, res) => {
    const username = req.body?.username ?? "";
    const age = req.body?.age;

    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }

    if (typeof age !== "number" || age < 18) {
        return res.status(400).json({ error: "Must be 18 or older" });
    }

    res.status(200).json({ message: `Welcome, ${username}!` });
});
```

### Role-based access

```js
function getAccessLevel(role) {
    switch (role) {
        case "admin":
            return "Full access";
        case "editor":
            return "Edit access";
        case "viewer":
            return "Read only";
        default:
            return "No access";
    }
}
```

### Environment-based config

```js
const PORT = process.env.PORT ?? 3000;
const DB_URL = process.env.DB_URL ?? "mongodb://localhost:27017";
```

---

## 12. Putting It All Together

A realistic login system using everything from this chapter:

```js
// ─── Config ──────────────────────────────────────────────────────────────────
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "secret123";
const MAX_ATTEMPTS = 3;
let attempts = 0;

// ─── Helper — validates input type safely ────────────────────────────────────
function isValidInput(value) {
    return typeof value === "string" && value.trim() !== "";
}

// ─── Main login function ──────────────────────────────────────────────────────
function login(username, password) {

    // Defensive — handle null/undefined input
    const safeUsername = username?.trim() ?? "";
    const safePassword = password?.trim() ?? "";

    // Input validation
    if (!isValidInput(safeUsername) || !isValidInput(safePassword)) {
        return "Invalid input — username and password must be non-empty strings";
    }

    // Lockout check
    if (attempts >= MAX_ATTEMPTS) {
        return "Account locked — too many failed attempts";
    }

    // Credential check
    if (safeUsername === VALID_USERNAME && safePassword === VALID_PASSWORD) {
        attempts = 0;   // reset on success
        return `Welcome, ${safeUsername}!`;
    } else {
        attempts++;
        const remaining = MAX_ATTEMPTS - attempts;
        return remaining > 0
            ? `Login failed. ${remaining} attempt${remaining === 1 ? "" : "s"} remaining.`
            : "Account locked — too many failed attempts";
    }
}

// ─── Test cases ───────────────────────────────────────────────────────────────
console.log(login(null, "secret123"));         // Invalid input
console.log(login("admin", "wrongpass"));      // Login failed. 2 attempts remaining.
console.log(login("admin", "wrongpass"));      // Login failed. 1 attempt remaining.
console.log(login("admin", "wrongpass"));      // Account locked
console.log(login("admin", "secret123"));      // Account locked (already locked)
```

### What this demonstrates

- `?.` and `??` for safe input handling
- `typeof` for type checking
- `if/else` for multi-condition logic
- Ternary for inline conditional strings
- Short-circuit evaluation with `&&` and `||`
- Counting and comparing with `>=`

---

## 13. Session Progress Checklist

After completing this chapter you should be able to:

- [ ] Write `if/else` and `else if` chains correctly
- [ ] Order conditions from most to least restrictive
- [ ] Use all six comparison operators correctly
- [ ] Use `&&`, `||`, and `!` in conditions
- [ ] Explain short-circuit evaluation in your own words
- [ ] Write a ternary expression for a two-outcome decision
- [ ] Write a nested ternary for a three-outcome decision
- [ ] Write a `switch` statement with fall-through cases
- [ ] Explain when to use `switch` vs `if/else`
- [ ] Use `?.` to safely access properties/methods on nullable values
- [ ] Use `??` to provide fallback values
- [ ] Explain the difference between `??` and `||`
- [ ] Describe defensive programming in one sentence

---

## 14. Exercises With Solutions

---

### Exercise 1 — Basic if/else

**Task:** Write a function called `checkTemperature` that takes a `temperature` parameter and returns `"It's hot"` if above 30, otherwise `"It's cool"`.

**Solution:**

```js
function checkTemperature(temperature) {
    if (temperature > 30) {
        return "It's hot";
    } else {
        return "It's cool";
    }
}

console.log(checkTemperature(35));   // It's hot
console.log(checkTemperature(25));   // It's cool
console.log(checkTemperature(30));   // It's cool — 30 is not > 30
```

---

### Exercise 2 — else if chain

**Task:** Write a function called `getGrade` that returns a letter grade based on score.

**Solution:**

```js
function getGrade(score) {
    if (score >= 80)      return "A";
    else if (score >= 70) return "B";
    else if (score >= 60) return "C";
    else if (score >= 50) return "P";
    else                  return "F";
}

console.log(getGrade(90));   // A
console.log(getGrade(75));   // B
console.log(getGrade(65));   // C
console.log(getGrade(55));   // P
console.log(getGrade(40));   // F
```

---

### Exercise 3 — Logical operators + ternary

**Task:** Write `canEnterClub` in two versions — `if/else` and ternary.

**Solution:**

```js
// Version 1 — if/else
function canEnterClub(age, hasID) {
    if (age < 18)  return "Too young!";
    if (!hasID)    return "No ID no entry";
    return "Entry granted";
}

// Version 2 — ternary
function canEnterClub2(age, hasID) {
    return age < 18 ? "Too young!" : hasID ? "Entry granted" : "No ID no entry";
}

console.log(canEnterClub(18, true));    // Entry granted
console.log(canEnterClub(17, true));    // Too young!
console.log(canEnterClub(18, false));   // No ID no entry
console.log(canEnterClub(17, false));   // Too young! — age checked first
```

---

### Exercise 4 — switch with fall-through

**Task:** Write `getDayType` using switch — returns "Weekday", "Weekend", or "Invalid day".

**Solution:**

```js
function getDayType(day) {
    switch (day?.toLowerCase() ?? "") {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            return "Weekday";
        case "saturday":
        case "sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}

const days = ["monday", "Tuesday", "WEDNESDAY", "Saturday", "sundAy", "holiday"];
for (let i = 0; i < days.length; i++) {
    console.log(getDayType(days[i]));
}
// Weekday, Weekday, Weekday, Weekend, Weekend, Invalid day
```

---

### Exercise 5 — Defensive programming

**Task:** Write a function called `safeGreet` that takes a `name` parameter. If name is a non-empty string, return `"Hello, {name}!"`. Otherwise return `"Hello, stranger!"`.

Handle `null`, `undefined`, empty string, and non-string types safely.

**Solution:**

```js
function safeGreet(name) {
    const safeName = typeof name === "string" ? name.trim() : "";
    return safeName ? `Hello, ${safeName}!` : "Hello, stranger!";
}

console.log(safeGreet("ddevmetal"));   // Hello, ddevmetal!
console.log(safeGreet(""));            // Hello, stranger!
console.log(safeGreet(null));          // Hello, stranger!
console.log(safeGreet(undefined));     // Hello, stranger!
console.log(safeGreet(123));           // Hello, stranger!
```

---

## What's Next — Chapter 4 Preview

Chapter 4 covers **Loops** — `for`, `while`, `do...while`, and `forEach`.

Loops are how you process collections of data — iterating through arrays of users, API responses, or database results. Combined with conditionals, loops are the core of most real program logic.

---

*Notes authored by ddevmetal · April 2026*
*JavaScript learning sessions with Claude · Tier 1 — Foundations*
*Next: Chapter 4 — Loops*
