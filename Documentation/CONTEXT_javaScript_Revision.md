# JavaScript Revision — Context File
> Paste this at the start of every new session so the AI knows exactly where we are.
> Update this file at the end of every session.

---

## Learner Profile

| Field | Detail |
|-------|--------|
| Name | ddevmetal |
| Background | CS Major, Big Data track — second degree, mid-career |
| Prior languages | Java (3 years ago, rusty) — OOP concepts exist |
| Prior JS exposure | One Node.js project (The Briefing Room Widget) — heavy scaffolding, could read with explanation, could not write from scratch |
| Goal | Write JavaScript independently before next project |
| Learning style | Hands-on, learn by doing, one concept at a time |
| Responds well to | Analogies, real-world Node.js context, Java comparisons |
| Environment | Linux terminal, Node.js v20.19.2, micro/nvim editor, no desktop |

---

## Repository Structure

```
javaScript_Revision/
├── Documentation/
│   └── CONTEXT.md              ← this file
├── Lessons/
│   └── Lesson1/
│       ├── variables.js
│       ├── dataType1.js
│       ├── dataType2.js
│       ├── function1.js
│       ├── function2.js
│       ├── function3.js
│       ├── function_Ex2.js
│       ├── function_Ex3.js
│       └── function_Ex4.js
└── Notes/
    └── js-fundamentals-chapter-01.md
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

**Errors made and corrected:**
- Used `-` instead of `=` for assignment (caught by Node error)
- Tried to mix function styles in same declaration
- Declared three functions with the same name `greet`
- Used `var` style thinking for function expression naming
- Forgot closing bracket in `console.log()`
- Used `==` instead of `===` — noted and corrected

**Concepts that clicked well:**
- Template literals — discovered independently without being told
- Connecting `let` to loop counters unprompted
- `findLargest` logic was correct even when syntax was wrong

**Concepts that needed extra time:**
- Difference between parameter and argument — needed two attempts
- Keeping function styles separate — kept mixing them early on

**Notes chapter produced:**
- `Notes/js-fundamentals-chapter-01.md` — full chapter with theory, history of JS, modern web context, all exercises with solutions

---

## Progress Tracker

### Tier 1 — Foundations

| Topic | Status | Session | Notes |
|-------|--------|---------|-------|
| Variables — `var`, `let`, `const` | ✅ Done | 1 | Solid. Can write independently. |
| Data Types | ✅ Done | 1 | Solid. Knows the null bug. |
| Functions — declaration, expression, arrow | ✅ Done | 1 | Solid. All 3 styles written independently. |
| Scope — local, global, block | 🔲 Next | — | — |
| Conditionals — `if/else`, ternary | 🔲 Pending | — | Had preview via isEven exercise |
| Loops — `for`, `while`, `forEach` | 🔲 Pending | — | Mentioned loop concept unprompted |

### Tier 2 — Arrays and Objects

| Topic | Status |
|-------|--------|
| Arrays — create, access, modify | 🔲 Pending |
| Array methods — `.map()`, `.filter()`, `.forEach()`, `.find()`, `.reduce()` | 🔲 Pending |
| Objects — create, access, modify, nested | 🔲 Pending |
| Destructuring — arrays and objects | 🔲 Pending |
| Spread operator `...` | 🔲 Pending |

### Tier 3 — Functions Deep Dive

| Topic | Status |
|-------|--------|
| First-class functions | 🔲 Pending |
| Callbacks | 🔲 Pending |
| Higher-order functions | 🔲 Pending |
| Closures | 🔲 Pending |

### Tier 4 — Async JavaScript

| Topic | Status |
|-------|--------|
| Synchronous vs asynchronous | 🔲 Pending |
| Callbacks (async context) | 🔲 Pending |
| Promises — `.then()`, `.catch()` | 🔲 Pending |
| `async/await` | 🔲 Pending |
| `fetch()` | 🔲 Pending |

### Tier 5 — Node.js Specific

| Topic | Status |
|-------|--------|
| `require()` and `module.exports` | 🔲 Pending |
| CommonJS vs ES Modules | 🔲 Pending |
| `process.env` | 🔲 Pending |
| File system basics — `fs` module | 🔲 Pending |

### Tier 6 — OOP in JavaScript

| Topic | Status |
|-------|--------|
| Objects and methods | 🔲 Pending |
| `this` keyword | 🔲 Pending |
| Classes — constructor, methods, inheritance | 🔲 Pending |
| Comparison with Java OOP | 🔲 Pending |

---

## Next Session Checklist

**Topic:** Scope — local, global, block scope

**Start the session by asking:**
> "What is a variable's scope? Take a guess before we start."

**Then ask what they remember from last session:**
> "Without looking at notes — what is the difference between a parameter and an argument?"

**If they remember correctly** — proceed to Scope.
**If they don't** — quick 2 minute recap, then continue.

**Key things to connect:**
- `let` and `const` are block-scoped — this will make more sense now that they have used them
- `var` is function-scoped — this is one reason it causes bugs (good time to revisit why we avoid it)
- Scope is why the same variable name can exist in two places without conflict
- Real-world: in Express, variables declared inside a route handler are not accessible outside it

**Java comparison to use:**
- Java has block scope too — `{ }` creates a new scope in both languages
- The difference is `var` in JS, which ignores block scope (function-scoped instead)

---

## Conventions Used in This Repo

| Convention | Example |
|------------|---------|
| Lesson files | `Lessons/Lesson1/topicName.js` |
| Exercise files | `function_Ex2.js` — topic + Ex + number |
| Notes | `Notes/js-fundamentals-chapter-XX.md` |
| Context file | `Documentation/CONTEXT.md` — this file |
| Commit style | `"Lesson 1 complete — variables, types, functions"` |

---

## How to Update This File

At the end of every session:

1. Add a new entry under **Session Log**
2. Mark completed topics as ✅ in **Progress Tracker**
3. Update **Next Session Checklist** with the upcoming topic
4. Commit and push:

```bash
git add Documentation/CONTEXT.md
git commit -m "Update context — Lesson X complete"
git push
```

---

*Last updated: April 2, 2026 — after Session 1*
*Current level: Tier 1 — 3 of 6 topics complete*
*Next: Scope*
