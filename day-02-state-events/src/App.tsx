import { useMemo, useState } from "react";

type CounterEvent = {
  id: number;
  label: string;
  value: number;
};

function App() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [history, setHistory] = useState<CounterEvent[]>([]);

  const theme = useMemo(
    () => ({
      padding: "24px",
      minHeight: "100vh",
      backgroundColor: isDark ? "#111827" : "#f8fafc",
      color: isDark ? "#f9fafb" : "#0f172a",
      fontFamily: "system-ui, sans-serif",
    }),
    [isDark],
  );

  const addHistory = (label: string, nextValue: number) => {
    setHistory((prev) => [
      { id: Date.now() + Math.random(), label, value: nextValue },
      ...prev,
    ]);
  };

  const increment = () => {
    // Functional updates are safer when the next state depends on current state.
    setCount((current) => {
      const next = current + step;
      addHistory(`Increment by ${step}`, next);
      return next;
    });
  };

  const decrement = () => {
    setCount((current) => {
      const next = Math.max(0, current - step);
      addHistory(`Decrement by ${step}`, next);
      return next;
    });
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <main style={theme}>
      <h1>Day 2: State and Events</h1>
      <p>
        Count value is <strong>{count}</strong>
      </p>

      <label htmlFor="step-input">Step size: </label>
      <input
        id="step-input"
        type="number"
        min={1}
        value={step}
        onChange={(event) => {
          const nextStep = Number(event.target.value);
          setStep(Number.isNaN(nextStep) || nextStep < 1 ? 1 : nextStep);
        }}
      />

      <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
        <button onClick={increment}>+ Increment</button>
        <button onClick={decrement} disabled={count === 0}>
          - Decrement
        </button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => setIsDark((prev) => !prev)}>
          Toggle {isDark ? "Light" : "Dark"} Theme
        </button>
      </div>

      <h2>Recent events</h2>
      {history.length === 0 ? (
        <p>No events yet. Click a button to update state.</p>
      ) : (
        <ul>
          {history.slice(0, 5).map((item) => (
            <li key={item.id}>
              {item.label} {"->"} {item.value}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
