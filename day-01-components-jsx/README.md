📘 Day 1 – Components & JSX
🎯 What You Will Learn Today

By the end of this day, you will understand:

What a React component is

What JSX is and why it exists

How components are composed together

How data flows using props

How TypeScript improves React safety

🧠 Core Concept: What Is a React Component?

A React component is a reusable piece of UI.

In simple terms:

A component is a JavaScript function that returns UI

Instead of writing one large HTML file, React encourages breaking UI into:

Small

Reusable

Independent pieces

This makes applications easier to:

Read

Maintain

Scale across teams

🧩 Why JSX Exists

JSX looks like HTML, but it is not HTML.

JSX allows us to:

Write UI in a readable format

Keep UI logic and structure together

Use JavaScript expressions inside UI

Under the hood:

JSX is converted to JavaScript

Browsers never see JSX directly

🔁 Component Composition (How React Apps Are Built)

React applications are built by nesting components.

Example mental model:

App
 ├── Header
 ├── ProfileCard
 └── Footer


Important rule:

Data flows one direction

Parent → Child (via props)

This predictability is a major reason React scales well.

🧾 Props: Passing Data to Components

Props are how a parent component sends data to a child.

Key rules:

Props are read-only

Child components must never modify props

Props act as a contract

With TypeScript, this contract becomes explicit and safe.

🛠️ Project Overview – Hello React Dashboard

In today’s project, we built:

A Header component

A reusable ProfileCard component

A Footer component

A clean App.tsx that composes everything

What we intentionally did NOT use today:

State

Events

APIs

This keeps the focus purely on foundations.

🧠 Why TypeScript with React?

TypeScript helps us:

Catch bugs early

Enforce correct component usage

Improve IDE autocomplete

Make refactoring safer

Example:
If a component expects a string prop, TypeScript prevents passing a number.

This is why most enterprise React applications use TypeScript.

📌 Key Takeaways

Components are functions that return UI

JSX is JavaScript, not HTML

Props enable one-way data flow

TypeScript makes React predictable and safe

App.tsx should focus on composition, not logic

⚠️ Common Mistakes & Misconceptions

❌ “JSX is HTML”
→ JSX is JavaScript syntax

❌ “Child components can update props”
→ Props are immutable

❌ “TypeScript slows development”
→ It speeds up large-scale development

🧪 Mini Assignments

Add another ProfileCard with different data

Make one prop optional and handle missing values

Try passing the wrong type and observe the TypeScript error

🏁 Day 1 Completion Criteria

You are done when:

You can explain components without code

You understand why props exist

You see the value of TypeScript in React