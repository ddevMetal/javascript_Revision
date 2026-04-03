# JavaScript Revision — Context File

> Paste this at the start of every new session so the AI knows exactly where we are.
> Update this file at the end of every session.

---

## Learner Profile

| Field             | Detail                                                                                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Name              | ddevmetal                                                                                                                     |
| Background        | CS Major, Big Data track — second degree, mid-career                                                                          |
| Prior languages   | Java (3 years ago, rusty) — OOP concepts exist                                                                                |
| Prior JS exposure | One Node.js project (The Briefing Room Widget) — heavy scaffolding, could read with explanation, could not write from scratch |
| Goal              | Write JavaScript independently before next project                                                                            |
| Learning style    | Hands-on, learn by doing, one concept at a time                                                                               |
| Responds well to  | Analogies, real-world Node.js context, Java comparisons                                                                       |
| Environment       | Linux terminal, Node.js v20.19.2, micro/nvim editor, no desktop                                                               |

---

## Repository Structure

```
javaScript_Revision/
├── Documentation/
│   └── CONTEXT_javaScript_Revision.md    ← this file
├── Lessons/
│   ├── Lesson1/
│   │   ├── variables.js
│   │   ├── dataType1.js
│   │   ├── dataType2.js
│   │   ├── function1.js
│   │   ├── function2.js
│   │   ├── function3.js
│   │   ├── function_Ex2.js
│   │   ├── function_Ex3.js
│   │   └── function_Ex4.js
│   └── Lesson2/
│       ├── Lesson2-notes.md
│       └── scope_Exercise1.js
└── Notes/
    ├── js-fundamentals-chapter-01.md
    └── js-fundamentals-chapter-02.md
```

**Remote:** https://github.com/ddevMetal/javascript_Revision.git
**Branch:** main

---

## Session Log

### Session 1 — April 2, 2026

**Topics covered:**

- Variables — `let`, `const`, `var`
- Data Types — string, number, boolean, null, undefined
- Functions — declaration, expression, arrow function
- Bonus: template literals, `typeof` operator, `===` vs `==`, modulus `%` operator

**Files created:**
| File | What it practised |
|------|------------------|
| `variables.js` | let, const declaration and reassignment |
| `dataType1.js` | typeof on all 5 basic types |
| `dataType2.js` | typeof — corrected version with undefined |
| `function1.js` | greet and greetUser — Style 1 |
| `function2.js` | All 3 function styles side by side |
| `function3.js` | multiply — Style 1 and Style 3 |
| `function_Ex2.js` | userProfile — Style 2 + template literal |
| `function_Ex3.js` | isEven — Style 3 + modulus |
| `function_Ex4.js` | findLargest — nested if/else + && operator |

**Concepts that clicked well:**

- Template literals — discovered independently without being told
- Connecting `let` to loop counters unprompted
- `findLargest` logic was correct even when syntax was wrong

**Concepts that needed extra time:**

- Difference between parameter and argument — needed two attempts
- Keeping function styles separate — kept mixing them early on

---

### Session 2 — April 2, 2026

**Topics covered:**

- Scope — global, local (function), block
- Why `var` is dangerous — function-scoped vs block-scoped
- Encapsulation — keeping variables contained to where they are needed

**Files created:**
| File | What it practised |
|------|------------------|
| `Lesson2-notes.md` | Hand-written rough notes on scope concepts |
| `scope_Exercise1.js` | Global, local, and block scope — ReferenceError demonstration |

**Errors made and corrected:**

- Originally passed `siteName` as a parameter — shadowed the global variable instead of testing global access
- Placed block scope test inside the function instead of outside the `if` block
- Commented out the block scope error test instead of running it

**Concepts that clicked well:**

- Understood immediately why local scope prevents bugs — "if there is a helper function, you want that variable to end when the function ends"
- Connected scope to real-world security — variables like `userId` leaking globally would be a security bug
- Defined encapsulation correctly in own words on first attempt

**Concepts that needed extra time:**

- Block scope placement — needed correction on where to put the outside test
- Separating encapsulation (scope concept) from reassignment (const/let concept) — these were mixed initially

**Key terminology introduced:**

- **Encapsulation** — containing variables within the scope where they are needed
- **ReferenceError** — thrown when JS cannot find a variable in the current scope
- **Shadowing** — when a local variable has the same name as a global, the local one takes priority inside its scope

---

## Progress Tracker

### Tier 1 — Foundations

| Topic                                      | Status     | Session | Notes                                            |
| ------------------------------------------ | ---------- | ------- | ------------------------------------------------ |
| Variables — `var`, `let`, `const`          | ✅ Done    | 1       | Solid. Can write independently.                  |
| Data Types                                 | ✅ Done    | 1       | Solid. Knows the null bug.                       |
| Functions — declaration, expression, arrow | ✅ Done    | 1       | Solid. All 3 styles written independently.       |
| Scope — local, global, block               | ✅ Done    | 2       | Solid. Understood encapsulation instinctively.   |
| Conditionals — `if/else`, ternary          | 🔲 Next    | —       | Had preview via isEven and findLargest exercises |
| Loops — `for`, `while`, `forEach`          | 🔲 Pending | —       | Mentioned loop concept unprompted in Session 1   |

### Tier 2 — Arrays and Objects

| Topic                                                                       | Status     |
| --------------------------------------------------------------------------- | ---------- |
| Arrays — create, access, modify                                             | 🔲 Pending |
| Array methods — `.map()`, `.filter()`, `.forEach()`, `.find()`, `.reduce()` | 🔲 Pending |
| Objects — create, access, modify, nested                                    | 🔲 Pending |
| Destructuring — arrays and objects                                          | 🔲 Pending |
| Spread operator `...`                                                       | 🔲 Pending |

### Tier 3 — Functions Deep Dive

| Topic                  | Status     |
| ---------------------- | ---------- |
| First-class functions  | 🔲 Pending |
| Callbacks              | 🔲 Pending |
| Higher-order functions | 🔲 Pending |
| Closures               | 🔲 Pending |

### Tier 4 — Async JavaScript

| Topic                            | Status     |
| -------------------------------- | ---------- |
| Synchronous vs asynchronous      | 🔲 Pending |
| Callbacks (async context)        | 🔲 Pending |
| Promises — `.then()`, `.catch()` | 🔲 Pending |
| `async/await`                    | 🔲 Pending |
| `fetch()`                        | 🔲 Pending |

### Tier 5 — Node.js Specific

| Topic                            | Status     |
| -------------------------------- | ---------- |
| `require()` and `module.exports` | 🔲 Pending |
| CommonJS vs ES Modules           | 🔲 Pending |
| `process.env`                    | 🔲 Pending |
| File system basics — `fs` module | 🔲 Pending |

### Tier 6 — OOP in JavaScript

| Topic                                       | Status     |
| ------------------------------------------- | ---------- |
| Objects and methods                         | 🔲 Pending |
| `this` keyword                              | 🔲 Pending |
| Classes — constructor, methods, inheritance | 🔲 Pending |
| Comparison with Java OOP                    | 🔲 Pending |

---

## Next Session Checklist

**Topic:** Conditionals — `if/else`, comparison operators, ternary operator

**Start the session by asking:**

> "You have already used if/else in exercises. Tell me in your own words — how does an if/else statement decide which block of code to run?"

**Then ask what they remember from last session:**

> "Without looking at notes — what are the three types of scope in JavaScript?"

**If they remember correctly** — proceed to Conditionals.
**If they don't** — quick 2 minute recap, then continue.

**Key things to connect:**

- They already used `if/else` in `isEven` and `findLargest` — this session makes it formal
- Introduce comparison operators properly: `===`, `!==`, `>`, `<`, `>=`, `<=`
- Introduce logical operators: `&&` (AND), `||` (OR), `!` (NOT) — they used `&&` in `findLargest`
- Ternary operator — shorthand for simple if/else, very common in React and modern JS
- `switch` statement — briefly, for when you have many conditions on the same value

**Java comparison to use:**

- `if/else` syntax is nearly identical to Java
- Ternary operator exists in Java too: `condition ? valueIfTrue : valueIfFalse`
- Key difference: JavaScript uses `===` not `==` for safe comparison

**Watch for:**

- Learner using `==` instead of `===` — correct immediately
- Learner confusing `=` (assignment) with `===` (comparison) — common early mistake

---

## Conventions Used in This Repo

| Convention           | Example                                                    |
| -------------------- | ---------------------------------------------------------- |
| Lesson files         | `Lessons/LessonX/topicName.js`                             |
| Exercise files       | `topicName_ExerciseN.js`                                   |
| Rough session notes  | `Lessons/LessonX/LessonX-notes.md`                         |
| Formal chapter notes | `Notes/js-fundamentals-chapter-XX.md`                      |
| Context file         | `Documentation/CONTEXT_javaScript_Revision.md` — this file |
| Commit style         | `"Lesson X complete — topics covered"`                     |

---

## How to Update This File

At the end of every session:

1. Add a new entry under **Session Log**
2. Mark completed topics as ✅ in **Progress Tracker**
3. Update **Next Session Checklist** with the upcoming topic
4. Commit and push:

```bash
git add Documentation/CONTEXT_javaScript_Revision.md
git commit -m "docs: update context — Lesson X complete"
git push
```

---

_Last updated: April 2, 2026 — after Session 2_
_Current level: Tier 1 — 4 of 6 topics complete_
_Next: Conditionals — if/else, ternary operator_
