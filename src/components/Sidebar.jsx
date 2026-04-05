export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>FinTrack Pro</h2>
      </div>

      <p className="menu-title">MENU</p>

      <ul className="menu">
        <li className="active">🏠 Dashboard</li>
        <li>💰 Transactions</li>
        <li>💳 Card</li>
        <li>📊 Analytics</li>
        <li>🕓 History</li>
      </ul>

      <p className="menu-title">GENERAL</p>

      <ul className="menu">
        <li>⚙️ Setting</li>
        <li>❓ Help Center</li>
      </ul>

      <div className="pro-box">
        <h4>Switch to Pro</h4>
        <p>Unlock advanced analytics and features</p>
      </div>
    </div>
  );
}