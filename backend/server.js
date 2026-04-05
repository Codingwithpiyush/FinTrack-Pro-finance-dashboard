const express = require("express");
const cors = require("cors");
const FinTrackEnv = require("./env");

const app = express();

app.use(cors());
app.use(express.json());

const env = new FinTrackEnv("medium");

app.get("/reset", (req, res) => {
  const state = env.reset();
  res.json({
    message: "Environment reset",
    state
  });
});

app.post("/step", (req, res) => {
  const { action } = req.body;

  const validActions = [
    "reduce_expense",
    "increase_savings",
    "invest",
    "overspend"
  ];

  if (!action || !validActions.includes(action)) {
    return res.status(400).json({
      error: "Invalid action",
      validActions
    });
  }

  const result = env.step(action);

  res.json({
    message: "Action executed",
    ...result
  });
});

app.get("/state", (req, res) => {
  res.json({
    state: env.getState()
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 FinTrack AI Server running at http://localhost:${PORT}`);
});