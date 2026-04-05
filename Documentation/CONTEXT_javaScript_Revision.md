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
| Learning style | Hands-on, learn by doing — wants FULL coverage of each subset before moving on |
| Responds well to | Analogies, real-world Node.js context, Java/C++ comparisons, properties + limitations + patterns before exercises |
| Environment | Linux terminal, Node.js v20.19.2, micro/nvim editor, no desktop |

---

## Important Teaching Note

Learner explicitly requested full subset coverage before moving on. The teaching structure must follow:

```
Superset (e.g. Loops)
└── Subset 1 (e.g. for loop) — FULL coverage
    ├── Definition
    ├── Why it exists
    ├── Full syntax — all variations
    ├── Properties
    ├── Limitations
    ├── Common patterns
    ├── Common bugs
    ├── Comparison vs similar tools
    ├── Exercises — build complexity gradually
    └── Security connection
└── Subset 2 — full coverage
...
```

Do NOT move to the next subset until the current one is fully understood and exercised.

---

## Repository Structure

```
javaScript_Revision/
├── Documentation/
│   ├── CONTEXT_javaScript_Revision.md    ← this file
│   └── archive/
│       └── CONTEXT_javaScript_Revision_old_v1.md
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
│   ├── Lesson3/
│   │   ├── conditional_Ex1.js
│   │   ├── conditional_Ex2.js
│   │   ├── conditional_Ex3.js
│   │   ├── conditional_Ex4.js
│   │   └── conditional_Switch.js
│   └── Lesson4/
│       ├── loops_Ex1.js
│       ├── loops_Ex2.js
│       ├── loops_Ex3.js
│       └── loops_Ex5.js  ← pending — not yet written
└── Notes/
    ├── js-fundamentals-chapter-01.md
    ├── js-fundamentals-chapter-02.md
    ├── js-fundamentals-chapter-03.md
    └── js-fundamentals-chapter-04.md  ← pending generation
```

**Remote:** https://github.com/ddevMetal/javascript_Revision.git
**Branch:** main

---

## Session Log

### Session 1 — April 2, 2026
**Topics:** Variables, Data Types, Functions, template literals, typeof, ===

### Session 2 — April 2, 2026
**Topics:** Scope — global, local, block, encapsulation, var danger

### Session 3 — April 3, 2026
**Topics:** Conditionals — if/else/else if, comparison operators, logical operators, ternary, switch, defensive programming, ?., ??

### Session 4 — April 4, 2026

**Topics covered:**
- `??` vs `||` recap — locked in via REPL testing
- `for` loop — full coverage
  - Basic syntax — count up, count down, step, array iteration
  - Properties and limitations
  - Common patterns — flag-controlled, break, continue, nested loops
  - Common bugs — off by one, accidental global, infinite loop, modifying array while looping
  - Security connection — brute force attacks, rate limiting, account lockout
- `while` loop — basic syntax, flag-controlled pattern, while(true) + break
- `do...while` — runs at least once, proven with i=10 condition i<5
- Compound assignment operators — `+=`, `-=`, `*=`, `/=`

**Files created:**
| File | What it practised |
|------|------------------|
| `loops_Ex1.js` | for loop — count up, even numbers, count down |
| `loops_Ex2.js` | while loop — count to 5, doubling until > 100 |
| `loops_Ex3.js` | do...while — count to 5, prove runs once with false condition |

**Pending:**
- `loops_Ex5.js` — for loop full coverage exercise — NOT YET WRITTEN
- forEach full coverage — NOT YET TAUGHT
- Chapter 4 formal notes — NOT YET GENERATED

**Important feedback from learner:**
- Teaching was too shallow — syntax only, missing properties/limitations/patterns
- Requested full subset coverage before moving on — now standard approach
- Learner independently identified flag-controlled loop pattern
- Needs clearer exercise specifications — less ambiguity

**Concepts that clicked well:**
- `??` vs `||` — understood after REPL demonstration
- Flag-controlled loops — identified pattern independently
- Compound assignment operators — picked up immediately
- `while(true)` danger — understood intuitively

**Concepts that needed extra time:**
- `do...while` — confused about what "runs once" means in practice
- Ambiguous exercise wording

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
| Loops — `for`, `while`, `forEach` | 🔄 In Progress | 4 | for + while + do...while covered. forEach pending. Full exercise pending. |

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

**Topic:** Loops — complete remaining subsets

**Start by asking:**
> "Without looking at notes — what are the four common bugs in a for loop?"

**Then complete in this order:**

1. **loops_Ex5.js** — for loop full exercise — 4 tasks already specified:
   - Print array elements with position number starting from 1
   - Use `break` to find "charlie" and stop
   - Use `continue` to skip multiples of 3
   - Nested loop — 3x3 multiplication table

2. **forEach — full coverage** following the full subset structure
   - Definition, why it exists
   - Full syntax — element, index, array parameters
   - Properties and limitations — no break, no continue, array only
   - Common patterns and bugs
   - Comparison vs for loop
   - Exercise
   - Security connection

3. **Wrap up Loops** — summary, generate chapter 4 notes

**Watch for:**
- `<=` instead of `<` — repeated mistake
- Missing `let` on loop variable — repeated mistake
- Trying to use `break`/`continue` inside forEach

---

## Integrated Learning Plan

| Phase | Focus | Status |
|-------|-------|--------|
| Phase 1 | JS Fundamentals — Tiers 1–6 | 🔄 In Progress |
| Phase 2 | Web Dev — HTML, CSS basics, Express, full-stack project | 🔲 Pending |
| Phase 3 | Web Security — CSIT328 + dedicated sessions | 🔲 Pending |
| Phase 4 | Intermediate JS + Security capstone project | 🔲 Pending |

### Security connections per tier

| Tier | Security Topic |
|------|---------------|
| Tier 1 — Foundations | Defensive programming, input validation, brute force concept |
| Tier 2 — Arrays & Objects | Injection mindset, never trust req.body |
| Tier 3 — Functions | XSS — how malicious scripts get injected |
| Tier 4 — Async | CSRF, CORS, same-origin policy |
| Tier 5 — Node.js | Secrets management, path traversal, dependency vulnerabilities |
| Tier 6 — OOP | JWT, session management, role-based access control |

---

## Conventions

| Convention | Example |
|------------|---------|
| Lesson files | `Lessons/LessonX/topicName.js` |
| Exercise files | `topicName_ExN.js` |
| Formal chapter notes | `Notes/js-fundamentals-chapter-XX.md` |
| Context file | `Documentation/CONTEXT_javaScript_Revision.md` |
| Commit style | `"Lesson X complete — topics covered"` |

---

*Last updated: April 4, 2026 — after Session 4 (partial)*
*Current level: Tier 1 — Loops in progress*
*Next: loops_Ex5.js, then forEach full coverage, then Chapter 4 notes*
