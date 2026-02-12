# Day 1 - Components and JSX

## What you learned
- React UI is built from small reusable components.
- JSX is JavaScript syntax that describes UI.
- Props let parent components pass read-only data to children.
- TypeScript makes prop contracts explicit and safer.

## Core ideas
- A component is a function that returns JSX.
- Components should be focused and composable.
- `App.tsx` usually coordinates composition, while child components render specific UI sections.

## What this project demonstrates
- `Header`, `ProfileCard`, and `Footer` as separate components.
- Typed props for each component.
- Reusing `ProfileCard` for multiple profiles from an array.
- Optional prop handling (`isAvailable`).

## Why this matters
- Reusable components reduce duplication.
- Typed props catch mistakes early.
- Composition keeps larger projects maintainable.

## Practice tasks
1. Add a `githubUrl` prop to `ProfileCard` and render a profile link.
2. Create a reusable `SectionTitle` component and use it in `App.tsx`.
3. Make `location` optional and show a fallback like `"Location not shared"`.

## Completion check
- You can explain component composition.
- You can define and consume typed props.
- You can identify when a prop should be optional vs required.
