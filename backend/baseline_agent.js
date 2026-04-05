const FinTrackEnv = require("./env");

const env = new FinTrackEnv("easy");

let state = env.reset();
let done = false;

console.log("Starting AI simulation...\n");

while (!done) {
  let action;

  if (state.expenses > state.income) {
    action = "reduce_expense";
  } else {
    action = "increase_savings";
  }

  const result = env.step(action);

  console.log("Action:", action);
  console.log("State:", result.state);
  console.log("Reward:", result.reward);
  console.log("----------------------");

  state = result.state;
  done = result.done;
}

console.log("Simulation finished.");