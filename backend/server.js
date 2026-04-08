const express = require("express");
const cors = require("cors");
const FinTrackEnv = require("./env");

const app = express();
const PORT = process.env.PORT || 7860;

// 🔥 MIDDLEWARE
app.use(cors());
app.use(express.json());

// ============================
// 🤖 AI ENVIRONMENT SETUP
// ============================

const env = new FinTrackEnv("medium");

// RESET
app.get("/reset", (req, res) => {
  const state = env.reset();
  res.json({ message: "Environment reset", state });
});

// STEP (AI ACTION)
app.post("/step", (req, res) => {
  const { action } = req.body;

  const validActions = [
    "reduce_expense",
    "increase_savings",
    "invest",
    "overspend",
  ];

  if (!action || !validActions.includes(action)) {
    return res.status(400).json({
      error: "Invalid action",
      validActions,
    });
  }

  const result = env.step(action);
  res.json(result);
});

// GET STATE
app.get("/state", (req, res) => {
  res.json({ state: env.getState() });
});

// ============================
// 💰 TRANSACTIONS API
// ============================

let transactions = [
  { id: 1, name: "John", amount: 200, category: "Food" },
  { id: 2, name: "Alice", amount: 150, category: "Shopping" },
];

// GET
app.get("/transactions", (req, res) => {
  res.json(transactions);
});

// ADD
app.post("/transactions", (req, res) => {
  const newTx = {
    id: Date.now(),
    name: req.body.name,
    amount: req.body.amount,
    category: req.body.category,
  };

  transactions.push(newTx);
  res.json(newTx);
});

// DELETE
app.delete("/transactions/:id", (req, res) => {
  const id = parseInt(req.params.id);
  transactions = transactions.filter((t) => t.id !== id);
  res.json({ message: "Deleted successfully" });
});

// ============================
// 🚀 START SERVER (ALWAYS LAST)
// ============================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});