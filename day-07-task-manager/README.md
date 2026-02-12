# Day 7 - Task Manager (To-Do + Categories)

## Project goal
Build a practical to-do app that teaches React fundamentals through one complete mini project.

## What this project covers
- Add, edit, delete tasks (CRUD).
- Mark tasks completed/uncompleted.
- Assign tasks to categories: `Work`, `Personal`, `Study`.
- Filter tasks by category from a sidebar.
- Filter tasks by status: `All`, `Active`, `Completed`.
- Search tasks by title text.
- Toggle dark/light theme and persist preference.
- Persist tasks with `localStorage` so refresh keeps data.

## React concepts mapped
- `Components`: `TaskForm`, `TaskList`, `TaskItem`, `CategorySidebar`.
- `Props`: Parent (`App`) passes task data and event handlers down.
- `useState`: Stores tasks, active category, and editing state.
- `useEffect`: Saves task changes into `localStorage` and syncs theme with the DOM.
- `Conditional rendering`: Empty state, edit mode form state.
- `Event handling`: Form submit, toggle complete, edit/delete, category filter.

## Run locally
```bash
cd day-07-task-manager
npm install
npm run dev
```

## Suggested practice extensions
1. Add a task sort option (due date or creation time).
2. Add clear-all completed tasks action.
3. Show overdue task highlighting based on due date.
4. Add drag-and-drop reordering.
