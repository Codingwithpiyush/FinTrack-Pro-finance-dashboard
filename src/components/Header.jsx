export default function Header({ role, setRole, theme, setTheme }) {
  return (
    <div className="header">
      <div>
        <h2>Welcome, Piyush 👋</h2>
        <p className="tagline">Track. Analyze. Grow.</p>
      </div>

      <div className="header-right">
        {/* ROLE */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        <div className="header-right">
  <input type="text" placeholder="Search..." />

  <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
  {theme === "light" ? "🌙" : "☀️"}
</button>
</div>

        
      </div>
    </div>
  );
}