📘 Day 4 – Lists & Keys
🎯 Learning Objectives

By the end of this day, you will understand:

How React renders lists

Why .map() is used

What key is and why it matters

Common list rendering mistakes

🧠 Why Lists Are Important

Most real-world UIs are driven by arrays:

Users

Orders

Tasks

Notifications

React converts arrays into UI using .map().

🔑 Rendering Lists with .map()
array.map(item => <Component />)


.map() returns a new array

React renders each element in that array

Each element must have a key

🏷️ What Is a Key?

A key is a unique identifier for list items.

React uses keys to:

Track items between renders

Update only what changed

Avoid unnecessary DOM operations

⚠️ Why Index as Key Is Dangerous

Using index as key can cause:

Incorrect UI updates

State mismatches

Hard-to-debug issues

Only use index as key if:

List is static

Items never change order

🛠️ Project Overview – Task List

This project demonstrates:

Rendering static task data

Conditional UI inside lists

Proper key usage

Clean data-driven UI

📌 Key Takeaways

Lists come from arrays

.map() converts data to UI

Keys help React identify items

Stable keys prevent bugs

❌ Common Mistakes

❌ Forgetting keys
❌ Using array index as key
❌ Mutating list data directly

🧪 Practice Assignments

Add more tasks

Highlight completed tasks

Show “No tasks available” if list is empty

Replace <ul> with reusable <TaskItem /> component

🏁 Completion Criteria

You’re done when:

You can explain why keys exist

You know when NOT to use index as key

You can render lists confidently