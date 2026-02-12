import { useState } from "react";

type Role = "guest" | "member" | "admin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [role, setRole] = useState<Role>("guest");
  const [has2FA, setHas2FA] = useState<boolean>(false);

  const handleLoginToggle = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setRole("guest");
      setHas2FA(false);
      return;
    }

    setIsLoggedIn(true);
    setRole("member");
  };

  return (
    <main style={{ padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <h1>Day 3: Conditional Rendering</h1>

      <p>{isLoggedIn ? "Welcome back." : "Please log in to continue."}</p>

      <button onClick={handleLoginToggle}>{isLoggedIn ? "Logout" : "Login"}</button>

      {isLoggedIn && (
        <section style={{ marginTop: "16px" }}>
          <label htmlFor="role-select">Role: </label>
          <select
            id="role-select"
            value={role}
            onChange={(event) => setRole(event.target.value as Role)}
          >
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>

          <label style={{ marginLeft: "12px" }}>
            <input
              type="checkbox"
              checked={has2FA}
              onChange={(event) => setHas2FA(event.target.checked)}
            />
            2FA Enabled
          </label>
        </section>
      )}

      <hr />

      {/* Nested conditions are easier to reason about when split by role first, then flags. */}
      {!isLoggedIn && <p>Guest view: public documentation and signup links.</p>}

      {isLoggedIn && role === "member" && <p>Member view: course progress and saved notes.</p>}

      {isLoggedIn && role === "admin" && (
        <div>
          <p>Admin view: user management and analytics.</p>
          {has2FA ? (
            <p>Security check passed. You can access admin tools.</p>
          ) : (
            <p>Enable 2FA to unlock sensitive admin actions.</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
