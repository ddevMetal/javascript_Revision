# JavaScript Revision — Context File
> Paste this at the start of every new session so the AI knows exactly where we are.
> Update this file at the end of every session.

---

## Learner Profile

| Field | Detail |
|-------|--------|
| Name | ddevmetal |
| Background | CS Major, Big Data track — second degree, mid-career |
| Prior languages | Java (3 years ago, rusty) + C++ (university, rusty) — OOP concepts exist |
| Prior JS exposure | One Node.js project (The Briefing Room Widget) — heavy scaffolding, could read with explanation, could not write from scratch |
| Goal | Write JavaScript independently before next project |
| Learning style | Hands-on, learn by doing, one concept at a time |
| Responds well to | Analogies, real-world Node.js context, Java/C++ comparisons |
| Environment | Linux terminal, Node.js v20.19.2, micro/nvim editor, no desktop |

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
│   ├── Lesson2/
│   │   ├── Lesson2-notes.md
│   │   └── scope_Exercise1.js
│   └── Lesson3/
│       ├── conditional_Ex1.js
│       ├── conditional_Ex2.js
│       ├── conditional_Ex3.js
│       ├── conditional_Ex4.js
│       └── conditional_Switch.js
└── Notes/
    ├── js-fundamentals-chapter-01.md
    ├── js-fundamentals-chapter-02.md
    └── js-fundamentals-chapter-03.md
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

**Concepts that clicked well:**
- Template literals — discovered independently
- Connecting `let` to loop counters unprompted
- `findLargest` logic correct even when syntax was wrong

**Concepts that needed extra time:**
- Difference between parameter and argument
- Keeping function styles separate

---

### Session 2 — April 2, 2026

**Topics covered:**
- Scope — global, local (function), block
- Why `var` is dangerous — function-scoped vs block-scoped
- Encapsulation

**Concepts that clicked well:**
- Understood encapsulation instinctively
- Connected scope to real-world security

**Key terminology introduced:**
- Encapsulation, ReferenceError, Shadowing

---

### Session 3 — April 3, 2026

**Topics covered:**
- Conditionals — `if`, `else if`, `else`
- Comparison operators — `===`, `!==`, `>`, `<`, `>=`, `<=`
- Logical operators — `&&`, `||`, `!`
- Ternary operator — `condition ? valueIfTrue : valueIfFalse`
- Nested ternary — three outcomes in one line
- `switch` statement — fall-through pattern, `break`, `default`
- `switch(true)` pattern — valid but `if/else` cleaner for ranges
- Short-circuit evaluation — JavaScript stops at first true condition
- Defensive programming — introduction and mindset
- Optional chaining `?.` — ES2020
- Nullish coalescing `??` — ES2020
- `??` vs `||` — key difference

**Files created:**
| File | What it practised |
|------|------------------|
| `conditional_Ex1.js` | Basic if/else — temperature checker |
| `conditional_Ex2.js` | else if chain — grade calculator |
| `conditional_Ex3.js` | Logical operators — club entry, if/else + ternary versions |
| `conditional_Ex4.js` | switch — day type checker with `?.` and `??` |
| `conditional_Switch.js` | switch(true) pattern — grade ranges |

**Errors made and corrected:**
- Used `<=` instead of `<` in loop — processed undefined
- Missing `let` on loop variable — accidental global
- Missing `return` in ternary function — returned undefined
- Missing closing bracket in `console.log()`

**Concepts that clicked well:**
- `else if` ordering — most restrictive condition first
- Short-circuit evaluation — understood instinctively
- Switch fall-through — implemented correctly without being told
- Discovered `?.`, `??`, `.toLowerCase()` independently

**Bonus concepts introduced (not in original plan):**
- Optional chaining `?.`
- Nullish coalescing `??`
- `??` vs `||` distinction
- Defensive programming mindset
- `.toLowerCase()` for case-insensitive matching
- Array iteration with `for` loop — preview of next session

---

## Progress Tracker

### Tier 1 — Foundations

| Topic | Status | Session | Notes |
|-------|--------|---------|-------|
| Variables — `var`, `let`, `const` | ✅ Done | 1 | Solid |
| Data Types | ✅ Done | 1 | Solid. Knows the null bug. |
| Functions — declaration, expression, arrow | ✅ Done | 1 | All 3 styles solid |
| Scope — local, global, block | ✅ Done | 2 | Solid. Encapsulation understood. |
| Conditionals — `if/else`, ternary, switch | ✅ Done | 3 | Solid. All operators covered. |
| Loops — `for`, `while`, `forEach` | 🔲 Next | — | Previewed `for` in Ex4 |

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

**Topic:** Loops — `for`, `while`, `forEach`

**Start the session by asking:**
> "You used a for loop in Exercise 4 already. Tell me in your own words — what are the three parts of a for loop?"

**Then ask what they remember from last session:**
> "Without looking at notes — what is the difference between `??` and `||`?"

**If they remember correctly** — proceed to Loops.
**If they don't** — quick 2 minute recap, then continue.

**Key things to cover:**
- `for` loop — init, condition, update
- `while` loop — when iteration count is unknown
- `do...while` — runs at least once (they know this from C++)
- `forEach` — array method, cleaner than `for` for arrays
- `break` and `continue` — control loop flow
- Nested loops — loops inside loops

**C++/Java comparison:**
- `for` and `while` syntax nearly identical
- `forEach` is JavaScript specific
- `do...while` exists in both — good connection point

**Watch for:**
- Using `<=` instead of `<` — made this mistake in Ex4
- Forgetting `let` on loop variable — made this in Ex4
- Infinite loops — no update step

---

## Conventions Used in This Repo

| Convention | Example |
|------------|---------|
| Lesson files | `Lessons/LessonX/topicName.js` |
| Exercise files | `topicName_ExN.js` |
| Rough session notes | `Lessons/LessonX/LessonX-notes.md` |
| Formal chapter notes | `Notes/js-fundamentals-chapter-XX.md` |
| Context file | `Documentation/CONTEXT_javaScript_Revision.md` |
| Commit style | `"Lesson X complete — topics covered"` |

---

## Future Plan — After Tier 6

Once all 6 tiers are complete, a new intermediate-to-advanced learning plan will be created covering:

- Error handling — `try/catch/finally`
- Defensive programming in depth
- `?.` and `??` formally
- Input validation patterns in Express
- API design patterns
- Authentication — JWT, sessions
- Database interaction — MongoDB/PostgreSQL
- Testing — Jest basics
- Performance and security fundamentals

---

## How to Update This File

At the end of every session:

1. Add a new entry under **Session Log**
2. Mark completed topics as ✅ in **Progress Tracker**
3. Update **Next Session Checklist**
4. Commit and push:

```bash
git add Documentation/CONTEXT_javaScript_Revision.md
git commit -m "docs: update context — Lesson X complete"
git push
```

---

*Last updated: April 3, 2026 — after Session 3*
*Current level: Tier 1 — 5 of 6 topics complete*
*Next: Loops — last topic in Tier 1*
