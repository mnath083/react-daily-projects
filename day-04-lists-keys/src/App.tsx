type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const tasks: Task[] = [
    { id: 1, title: "Learn React basics", completed: true },
    { id: 2, title: "Understand state & events", completed: true },
    { id: 3, title: "Practice conditional rendering", completed: false },
    { id: 4, title: "Learn lists & keys", completed: false },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 4 – Lists & Keys</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.completed ? "✅" : "⬜"} {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
