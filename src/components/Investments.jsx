export default function Investments() {
  const data = [
    { name: "Mutual Funds", value: 25000, icon: "📊" },
    { name: "Stocks", value: 18000, icon: "📈" },
    { name: "FDs", value: 12000, icon: "🏦" },
  ];

  return (
    <div className="investment-section">
      <h3>Investments</h3>

      <div className="investment-cards">
        {data.map((item, i) => (
          <div className="investment-card" key={i}>
            <span className="icon">{item.icon}</span>
            <h4>{item.name}</h4>
            <p>₹{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}