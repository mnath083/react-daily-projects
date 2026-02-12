import { useState } from "react";
import type { FormEvent } from "react";

type Priority = "low" | "medium" | "high";

type Todo = {
  id: string;
  title: string;
  priority: Priority;
  done: boolean;
};

function App() {
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanTitle = title.trim();
    if (!cleanTitle) {
      return;
    }

    const nextTodo: Todo = {
      id: crypto.randomUUID(),
      title: cleanTitle,
      priority,
      done: false,
    };

    // Controlled form: submit reads state, then writes a new immutable list.
    setTodos((prev) => [nextTodo, ...prev]);
    setTitle("");
    setPriority("medium");
  };

  const toggleDone = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main style={{ padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <h1>Day 5: Forms and Controlled Inputs</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task-title">Task</label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Ship Day 5 practice app"
        />

        <label htmlFor="task-priority" style={{ marginLeft: "8px" }}>
          Priority
        </label>
        <select
          id="task-priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value as Priority)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit" disabled={!title.trim()} style={{ marginLeft: "8px" }}>
          Add Task
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(todo.id)}
              aria-label={`Mark ${todo.title} as done`}
            />
            {todo.title} ({todo.priority})
            <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: "8px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
