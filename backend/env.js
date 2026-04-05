class FinTrackEnv {
  constructor(mode = "medium") {
    this.mode = mode;
    this.reset();
  }

  reset() {
    this.state = {
      income: 50000,
      expenses: 20000,
      savings: 10000,
      day: 1
    };
    return this.state;
  }

  step(action) {
  let reward = 0;

  // 🚫 Stop if already done
  if (this.state.day >= 30) {
    return {
      state: this.state,
      reward: 0,
      done: true
    };
  }

  // Actions
  if (action === "reduce_expense") {
    this.state.expenses -= 200;
    reward += 20;
  }

  if (action === "increase_savings") {
    this.state.savings += 500;
    reward += 30;
  }

  if (action === "invest") {
    this.state.savings += 1000;
    this.state.expenses += 300;
    reward += 40;
  }

  if (action === "overspend") {
    this.state.expenses += 1000;
    reward -= 50;
  }

  // Move day forward
  this.state.day += 1;

  // ✅ STOP exactly at 30
  const done = this.state.day >= 30;

  return {
    state: this.state,
    reward,
    done
  };
}

  calculateReward() {
    return (
      this.state.savings * 0.5 -
      this.state.expenses * 0.2 +
      this.state.income * 0.1
    );
  }

  getState() {
    return this.state;
  }
}

module.exports = FinTrackEnv;