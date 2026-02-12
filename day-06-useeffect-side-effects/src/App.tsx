import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [note, setNote] = useState<string>(() => {
    return localStorage.getItem("daily-note") ?? "";
  });

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    // Side effect: start interval when timer is running; cleanup prevents leaked intervals.
    const timerId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [isRunning]);

  useEffect(() => {
    // Side effect: keep browser tab title in sync with state.
    document.title = `Timer: ${seconds}s`;
  }, [seconds]);

  useEffect(() => {
    localStorage.setItem("daily-note", note);
  }, [note]);

  return (
    <main style={{ padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <h1>Day 6: useEffect and Side Effects</h1>
      <p>Elapsed time: {seconds}s</p>

      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setSeconds(0);
        }}
        style={{ marginLeft: "8px" }}
      >
        Reset
      </button>

      <section style={{ marginTop: "16px" }}>
        <label htmlFor="note">Session note</label>
        <textarea
          id="note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="What did you learn from useEffect today?"
          rows={4}
          style={{ display: "block", width: "100%", maxWidth: "480px" }}
        />
        <small>Saved to localStorage automatically.</small>
      </section>
    </main>
  );
}

export default App;
