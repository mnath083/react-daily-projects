import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 3 – Conditional Rendering</h1>

      {/* Condition 1: Login status */}
      {isLoggedIn ? (
        <h2>Welcome back, User 👋</h2>
      ) : (
        <h2>Please log in</h2>
      )}

      {/* Condition 2: Button changes based on state */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      <hr />

      {/* Condition 3: Render only when logged in */}
      {isLoggedIn && (
        <div>
          <h3>Dashboard</h3>
          <p>This content is visible only to logged-in users.</p>
        </div>
      )}
    </div>
  );
}

export default App;