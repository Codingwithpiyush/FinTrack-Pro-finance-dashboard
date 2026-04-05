import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import ChartSection from "./components/ChartSection";
import Transactions from "./components/Transactions";
import Investments from "./components/Investments";
import Savings from "./components/Savinng";
import "./styles/dashboard.css";

import { useState, useEffect } from "react";

function App() {
  const [role, setRole] = useState("viewer");
  const [theme, setTheme] = useState("light");

  // 🔥 NEW STATES (AI ENV)
  const [state, setState] = useState(null);
  const [reward, setReward] = useState(0);

  // 🔁 Load initial state
  useEffect(() => {
    fetch("http://localhost:5000/reset")
      .then(res => res.json())
      .then(data => setState(data.state))
      .catch(err => console.error(err));
  }, []);

  // 🎮 Action handler
  const takeAction = async (action) => {
    try {
      const res = await fetch("http://localhost:5000/step", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ action })
      });

      const data = await res.json();

      setState(data.state);
      setReward(data.reward);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`dashboard ${theme}`}>
      <Sidebar />

      <div className="main">
        <Header 
          role={role} 
          setRole={setRole} 
          theme={theme} 
          setTheme={setTheme} 
        />

        {/* 🎮 ACTION BUTTONS */}
        <div className="action-buttons">
  <button onClick={() => takeAction("reduce_expense")}>
    💸 Reduce
  </button>

  <button onClick={() => takeAction("increase_savings")}>
    💰 Save
  </button>

  <button onClick={() => takeAction("invest")}>
    📈 Invest
  </button>

  <button onClick={() => takeAction("overspend")}>
    ⚠️ Overspend
  </button>
</div>

        {/* 📊 PASS DATA TO COMPONENTS */}
        <Cards data={state} reward={reward} />
        <ChartSection data={state} />
        <Investments data={state} />
        <Savings data={state} />
        <Transactions role={role} data={state} />

      </div>
    </div>
  );
}

export default App;