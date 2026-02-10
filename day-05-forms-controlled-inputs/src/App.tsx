import { useState } from "react";

function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 5 – Forms & Controlled Inputs</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
