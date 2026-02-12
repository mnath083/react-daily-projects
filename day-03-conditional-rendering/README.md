# Day 3 - Conditional Rendering

## What you learned
- React renders different UI branches based on conditions.
- Conditions are usually driven by state or props.
- JSX supports expressions (`? :`, `&&`), not statements like `if` inside markup.

## Core ideas
- Conditional rendering controls visibility and UI flow.
- Different patterns are useful in different cases:
  - Ternary for either/or branches.
  - `&&` for show/hide blocks.
  - Early returns for larger view gates.

## What this project demonstrates
- Login/logout branch.
- Role-based rendering (`member` vs `admin`).
- Nested condition for admin security requirement (`has2FA`).
- Resetting dependent state on logout to avoid invalid UI state.

## Why this matters
- Real apps use conditional rendering for auth, permissions, and feature flags.
- Correct branching avoids exposing wrong UI states.

## Practice tasks
1. Add a `loading` state and show a temporary skeleton before dashboard content.
2. Add a blocked user branch with a dedicated warning card.
3. Extract each view (`GuestView`, `MemberView`, `AdminView`) into separate components.

## Completion check
- You can choose between ternary and `&&` intentionally.
- You can model role-based UI without duplicating state.
- You can prevent inconsistent states when conditions change.
