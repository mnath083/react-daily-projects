# Day 2 - State and Events

## What you learned
- State stores data that changes over time.
- `useState` updates trigger re-renders.
- Event handlers connect user actions to state updates.
- Functional state updates prevent stale-value bugs.

## Core ideas
- UI is a function of state.
- If UI should change when data changes, that data belongs in state.
- Never mutate state directly; always create a new value.

## What this project demonstrates
- Counter with increment, decrement, reset.
- Dynamic step size controlled by user input.
- Theme toggle (`isDark`) driven by state.
- Event history list updated from button interactions.

## Why this matters
- Most interactive React apps are event-driven.
- Functional updates (`setState(prev => ...)`) are safer in async render flows.
- Multiple state values can represent one coherent screen.

## Practice tasks
1. Add a `max` limit and disable increment at that value.
2. Persist theme preference in `localStorage`.
3. Show only the last 3 history entries with a `Show all` toggle.

## Completion check
- You can explain why normal variables do not re-render UI.
- You can choose between direct and functional `setState` updates.
- You can wire user events to predictable state transitions.
