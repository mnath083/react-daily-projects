type Task = {
  id: string;
  title: string;
  category: "learning" | "practice" | "revision";
  completed: boolean;
};

const tasks: Task[] = [
  {
    id: "task-components",
    title: "Break UI into Header, Card, and Footer",
    category: "learning",
    completed: true,
  },
  {
    id: "task-state",
    title: "Build counter with increment and decrement",
    category: "practice",
    completed: true,
  },
  {
    id: "task-conditions",
    title: "Show login-only dashboard section",
    category: "practice",
    completed: false,
  },
  {
    id: "task-keys",
    title: "Use stable ids instead of array index",
    category: "revision",
    completed: false,
  },
];

function App() {
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main style={{ padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <h1>Day 4: Lists and Keys</h1>
      <p>
        Completed {completedCount} of {tasks.length} tasks
      </p>

      <ul>
        {tasks.map((task) => (
          // Use data id as key so React can track each row correctly across re-renders.
          <li key={task.id}>
            <strong>{task.title}</strong> | {task.category} | {task.completed ? "Done" : "Pending"}
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks available. Add your first learning task.</p>}
    </main>
  );
}

export default App;
