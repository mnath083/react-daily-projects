# Day 6 - useEffect and Side Effects

## What you learned
- `useEffect` is used for work outside render logic.
- Effects run after render and can re-run when dependencies change.
- Cleanup functions prevent memory leaks and stale subscriptions.

## Core ideas
- Render should stay pure; side effects belong in `useEffect`.
- Dependency arrays control when an effect re-runs.
- Cleanup is required for intervals, subscriptions, and listeners.

## What this project demonstrates
- Timer interval that starts/stops based on state.
- Cleanup of `setInterval` when paused/unmounted.
- Updating document title from state.
- Persisting textarea notes to `localStorage`.

## Why this matters
- Side effects are essential for real app behavior: timers, persistence, network, and DOM APIs.
- Correct dependency and cleanup logic avoids bugs that are hard to trace.

## Practice tasks
1. Add a lap feature that stores timestamps in an array.
2. Add a second effect that autosaves elapsed time to `localStorage`.
3. Replace timer with API polling and proper cancellation.

## Completion check
- You can identify what should and should not live in `useEffect`.
- You can write effect cleanup correctly.
- You can reason about dependencies and re-run behavior.
