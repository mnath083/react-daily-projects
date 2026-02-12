# Day 5 - Forms and Controlled Inputs

## What you learned
- In React, form inputs should usually be controlled by state.
- `value` + `onChange` creates a single source of truth.
- Form submit handlers should prevent page reload and validate input.

## Core ideas
- Controlled inputs keep UI and state synchronized.
- Form submission should produce immutable state updates.
- Validation and cleanup (like trimming text) should happen before storing data.

## What this project demonstrates
- Controlled text input and select dropdown.
- Todo model with `id`, `priority`, and `done` status.
- Add, toggle, and delete operations with immutable updates.
- Disabled submit button for invalid input.

## Why this matters
- Controlled forms are easier to validate, debug, and extend.
- Structured form data scales better than raw strings.

## Practice tasks
1. Add inline validation message for minimum title length.
2. Add edit mode to update existing tasks.
3. Add filter buttons (`all`, `open`, `done`).

## Completion check
- You can explain what makes an input controlled.
- You can submit form data without page refresh.
- You can update lists immutably from form actions.
