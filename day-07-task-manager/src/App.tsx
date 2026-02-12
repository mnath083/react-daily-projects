import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { CategorySidebar } from "./components/CategorySidebar";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { CATEGORIES, STORAGE_KEY } from "./constants";
import type { Task, TaskCategory, TaskFormData } from "./types";

type TaskStatusFilter = "All" | "Active" | "Completed";
type AppTheme = "light" | "dark";
const THEME_STORAGE_KEY = "day-07-task-manager-theme";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    /*
      Lazy initialization means this function runs only once on initial render.
      We load from localStorage here to avoid a flicker where tasks appear after mount.
    */
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw) as Task[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      // Fail safely if storage is corrupted or manually edited.
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState<TaskCategory | "All">("All");
  const [statusFilter, setStatusFilter] = useState<TaskStatusFilter>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [theme, setTheme] = useState<AppTheme>(() => {
    /*
      Theme preference is also persisted. If missing, default to light theme so
      the teaching demo stays visually consistent across different devices.
    */
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    // Persist every task change so refresh/reopen keeps user data.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    /*
      Side effect: update root DOM attribute + persist theme.
      CSS reads this attribute to switch variable values globally.
    */
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const editingTask = useMemo(() => {
    if (!editingTaskId) {
      return null;
    }

    return tasks.find((task) => task.id === editingTaskId) ?? null;
  }, [editingTaskId, tasks]);

  const filteredTasks = useMemo(() => {
    /*
      Filtering happens in three steps:
      1) Category filter (All or specific category)
      2) Status filter (All, Active, Completed)
      3) Title search filter (case-insensitive)
    */
    const categoryFiltered =
      activeCategory === "All"
        ? tasks
        : tasks.filter((task) => task.category === activeCategory);

    const statusFiltered =
      statusFilter === "All"
        ? categoryFiltered
        : categoryFiltered.filter((task) =>
            statusFilter === "Completed" ? task.completed : !task.completed,
          );

    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) {
      return statusFiltered;
    }

    return statusFiltered.filter((task) =>
      task.title.toLowerCase().includes(normalizedSearch),
    );
  }, [activeCategory, searchTerm, statusFilter, tasks]);

  const categoryCounts = useMemo(() => {
    return CATEGORIES.reduce<Record<TaskCategory, number>>((counts, category) => {
      counts[category] = tasks.filter((task) => task.category === category).length;
      return counts;
    }, { Work: 0, Personal: 0, Study: 0 });
  }, [tasks]);

  function handleTaskSubmit(formData: TaskFormData) {
    if (editingTask) {
      // Update path: map over tasks and replace only the matching item.
      setTasks((current) =>
        current.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                ...formData,
              }
            : task,
        ),
      );
      setEditingTaskId(null);
      return;
    }

    // Create path: compose a new task record with a unique id and metadata.
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      dueDate: formData.dueDate,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((current) => [newTask, ...current]);
  }

  function handleToggleComplete(taskId: string) {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  function handleDeleteTask(taskId: string) {
    setTasks((current) => current.filter((task) => task.id !== taskId));

    // If the user deletes the task currently being edited, exit edit mode.
    if (editingTaskId === taskId) {
      setEditingTaskId(null);
    }
  }

  return (
    <main className="app-shell">
      <header>
        <h1>Day 7: Task Manager (To-Do + Categories)</h1>
        <p>Practice CRUD, filtering, props, and localStorage with React hooks.</p>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </header>

      <div className="layout-grid">
        <CategorySidebar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        <section className="main-content">
          <TaskForm
            editingTask={editingTask}
            onSubmit={handleTaskSubmit}
            onCancelEdit={() => setEditingTaskId(null)}
          />

          <section className="task-search-card">
            <label htmlFor="task-search">Search Tasks by Title</label>
            <input
              id="task-search"
              type="search"
              placeholder="Type a title keyword..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <div className="status-filter">
              <span>Status</span>
              {(["All", "Active", "Completed"] as TaskStatusFilter[]).map((status) => (
                <button
                  key={status}
                  type="button"
                  className={`status-filter-button ${statusFilter === status ? "active" : ""}`}
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </section>

          <TaskList
            tasks={filteredTasks}
            activeCategoryLabel={[
              `Category: ${activeCategory}`,
              `Status: ${statusFilter}`,
              searchTerm.trim() ? `Search: "${searchTerm.trim()}"` : null,
            ]
              .filter(Boolean)
              .join(" | ")}
            onToggleComplete={handleToggleComplete}
            onEdit={setEditingTaskId}
            onDelete={handleDeleteTask}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
