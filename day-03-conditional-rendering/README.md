day-03-conditional-rendering/README.md

Paste this 👇

⸻

📘 Day 3 – Conditional Rendering

🎯 Learning Objectives

By the end of this day, you will understand:
	•	What conditional rendering is
	•	How React decides what to show
	•	Common conditional rendering patterns
	•	How state controls UI visibility

⸻

🧠 What Is Conditional Rendering?

Conditional rendering means:

Rendering different UI based on a condition

In React, the condition is usually:
	•	State
	•	Props

React evaluates conditions during rendering, not after.

⸻

🚫 Why if Does Not Work in JSX

JSX allows:
	•	Expressions
	•	Not statements

🛠️ Project Overview – Login / Logout UI

This project demonstrates:
	•	Conditional text
	•	Conditional buttons
	•	Protected UI sections
	•	State-driven rendering

No authentication logic was used.
Focus was purely on UI behavior.

⸻

📌 Key Takeaways
	•	React renders UI based on conditions
	•	State controls visibility
	•	JSX uses expressions, not statements
	•	Conditional rendering is used everywhere in real apps

⸻

⚠️ Common Mistakes

❌ Using if inside JSX
❌ Duplicating state unnecessarily
❌ Hiding UI with CSS instead of logic

⸻

🧪 Practice Assignments
	1.	Add a “Guest View” message
	2.	Show a profile section only when logged in
	3.	Replace ternary with && where applicable
	4.	Add a second condition (e.g., isAdmin)