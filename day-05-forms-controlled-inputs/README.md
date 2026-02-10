📘 Day 5 – Forms & Controlled Inputs
🎯 Learning Objectives

By the end of this day, you will understand:

How forms work in React

What controlled components are

Why inputs are connected to state

How React reads user input

🧠 Why Forms Are Different in React

In traditional HTML:

Browser manages input state

In React:

React manages input state

This gives:

Full control

Predictable behavior

Easier validation and submission

🔑 What Is a Controlled Component?

A controlled component is:

An input whose value comes from React state

Every change updates state

React is the single source of truth

🔁 Input Flow in React

User types

onChange fires

State updates

React re-renders

Input value updates

This loop happens for every keystroke.

🛠️ Project Overview – Simple To-Do Input

This project demonstrates:

Controlled text input

Form submission

State-driven UI updates

Rendering submitted values

📌 Key Takeaways

Inputs should be controlled

State stores form data

onChange keeps state in sync

Never let browser control the form

React owns the UI

⚠️ Common Beginner Mistakes

❌ Forgetting value prop
❌ Forgetting onChange
❌ Page refresh on submit
❌ Mutating state arrays

🧪 Practice Assignments

Disable Add button when input is empty

Trim whitespace before adding

Convert tasks to objects with id

Add delete button for tasks

🏁 Completion Criteria

You’re done when:

You understand controlled inputs

You can explain onChange

You know why React owns form state