📘 Day 2 – State & Events
🎯 What You Will Learn Today

By the end of this day, you will understand:

What state is in React

Why state is different from normal variables

How useState works

How user actions trigger UI updates

Why React re-renders components

🧠 Core Concept: What Is State?

State represents data that can change over time
and directly affects what the user sees.

Examples of state:

Counter value

Logged-in status

Selected theme

Form input values

If data changes and the UI must update → that data belongs in state.

❌ Why Normal Variables Don’t Work

Changing a normal variable does NOT tell React to update the UI.

React needs to:

Know that data changed

Re-run the component

Update the UI

useState does exactly this.

🔑 useState Explained Simply
const [count, setCount] = useState(0);


This means:

count → current state value

setCount → function to update state

Calling setCount triggers a re-render

Think of it as:

“React, something changed — please update the UI.”

🖱️ Events in React

Events allow users to interact with the UI.

Examples:

Button clicks

Input changes

Form submissions

In React:

Events are written in camelCase

Event handlers receive functions

<button onClick={handleClick}>Click</button>

🔁 UI = f(state)

This is the most important React idea.

The UI is always a function of state:

Same state → same UI

New state → new UI

You never manually update the DOM.

🛠️ Project Overview – Counter & Theme Toggle

This project demonstrates:

Multiple state variables

Event-driven updates

Conditional rendering using state

Inline styling based on state

What we intentionally avoided:

External CSS

Complex logic

APIs

Focus = fundamentals.

📌 Key Takeaways

State drives UI

useState triggers re-renders

Never mutate state directly

React handles DOM updates for you

Think in terms of state changes, not UI manipulation

⚠️ Common Mistakes

❌ Modifying state directly

count++; // wrong


❌ Expecting immediate updates
State updates are async.

❌ Using state when not needed
Static data ≠ state.

🧪 Mini Assignments

Disable decrement button when count is 0

Add a “Reset Counter” button

Add a second counter

Change theme text color dynamically

🏁 Day 2 Completion Criteria

You are done when:

You can explain useState without code

You understand why React re-renders

You can confidently teach “UI = f(state)”