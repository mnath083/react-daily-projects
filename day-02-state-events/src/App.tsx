import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: isDark ? "#222" : "#fff",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h1>Day 2 – State & Events</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <hr />

      <button onClick={() => setIsDark(!isDark)}>
        Toggle {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
