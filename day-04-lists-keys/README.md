# Day 4 - Lists and Keys

## What you learned
- Arrays are rendered into UI using `.map()`.
- Every rendered item needs a stable `key`.
- Keys help React reconcile updates correctly.

## Core ideas
- Data models drive list UI.
- `key` should come from persistent item identity (`id`), not array position.
- Index keys are risky when items are inserted, removed, or reordered.

## What this project demonstrates
- Rendering typed task objects.
- Stable key usage with `task.id`.
- Mixed content in list rows (title, category, status).
- Derived UI summary (`completedCount`).

## Why this matters
- Most production screens are list-heavy.
- Good key strategy prevents subtle render bugs and state mismatch.

## Practice tasks
1. Group tasks by category and render separate sections.
2. Add sorting (completed first, then pending).
3. Extract a reusable `TaskRow` component.

## Completion check
- You can explain why keys exist.
- You can identify when index keys are unsafe.
- You can render list UIs from typed data confidently.
