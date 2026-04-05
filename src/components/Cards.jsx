export default function Cards({ data, reward }) {
  // If data not loaded yet
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="cards">
      
      <div className="card purple">
        <p>Total Income</p>
        <h2>${data.income}</h2>
      </div>

      <div className="card orange">
        <p>Total Spending</p>
        <h2>${data.expenses}</h2>
      </div>

      <div className="card blue">
        <p>Savings</p>
        <h2>${data.savings}</h2>
      </div>

      <div className="card green">
        <p>Day</p>
        <h2>{data.day}</h2>
      </div>

      {/* 🔥 Bonus Card (Very impressive) */}
      <div className="card reward">
        <p>AI Reward</p>
        <h2>{reward}</h2>
      </div>

    </div>
  );
}