# 💰 FinTrack Pro — AI Financial Decision Environment (OpenEnv)

FinTrack Pro is a **real-world financial simulation environment** built using the OpenEnv specification.
It enables an AI agent to learn and optimize financial decisions such as saving, spending, and investing through structured interaction via `step()`, `reset()`, and `state()` APIs.

This project is developed for the **OpenEnv Hackathon**, focusing on creating a realistic environment suitable for training and evaluating intelligent agents.

---

## 🎯 Objective

To simulate a **personal finance management system** where an AI agent learns to:

* Maximize savings
* Minimize unnecessary expenses
* Make intelligent investment decisions
* Avoid financial instability

---

## 🧠 Environment Design

### 📌 State Space

```json
{
  "income": number,
  "expenses": number,
  "savings": number,
  "day": number
}
```

---

### 🎮 Action Space

| Action             | Description                          |
| ------------------ | ------------------------------------ |
| `reduce_expense`   | Decreases expenses (smart budgeting) |
| `increase_savings` | Moves funds into savings             |
| `invest`           | Invests money for future gain        |
| `overspend`        | Increases expenses (negative action) |

---

### 🔁 OpenEnv API Implementation

#### `reset(difficulty)`

* Initializes the environment
* Sets initial financial conditions

#### `step(action)`

Returns:

```json
{
  "state": {...},
  "reward": number,
  "done": boolean,
  "info": {}
}
```

#### `state()`

Returns current environment state

---

## 🎯 Difficulty Levels (3 Tasks Required)

| Level     | Description                                   |
| --------- | --------------------------------------------- |
| 🟢 Easy   | High income, low expenses (beginner-friendly) |
| 🟡 Medium | Balanced financial conditions                 |
| 🔴 Hard   | Low income, high expenses, strict penalties   |

✔ Meets hackathon requirement of **minimum 3 graded tasks**

---

## 🏆 Reward Function Design

The reward is **continuous and meaningful**, not binary.

### ✅ Positive Signals

* Increasing savings
* Reducing expenses
* Smart investment decisions

### ❌ Negative Signals

* Overspending
* Expenses exceeding income
* Poor financial planning

✔ Provides **partial progress rewards**
✔ Penalizes undesirable actions (loops, bad decisions)

---

## 🤖 Baseline Agent

A simple agent is implemented to:

* Interact with the environment
* Produce reproducible results

### Run:

```bash
node backend/baseline_agent.js
```

✔ Satisfies requirement: **baseline inference script**

---

## 🏗️ System Architecture

```text
Frontend (React)
      ↓
Backend API (Node.js + Express)
      ↓
OpenEnv Environment Logic (env.js)
      ↓
Agent Interaction (baseline_agent.js)
```

---

## 🛠️ Tech Stack

### 💻 Frontend

* React (Vite)
* CSS (Custom styling)
* Chart.js (Data visualization)

### ⚙️ Backend

* Node.js
* Express.js
* REST API

### 🧠 AI Environment

* Custom OpenEnv-compatible environment
* Reinforcement-style reward system

### 📦 Dev Tools

* Git & GitHub
* Docker

### ☁️ Deployment

* Hugging Face Spaces (Docker-based)

---

## 📂 Project Structure

```text
finance-dashboard/
│
├── backend/
│   ├── env.js                # OpenEnv environment logic
│   ├── server.js            # API server
│   ├── baseline_agent.js    # Agent script
│   ├── package.json
│
├── src/                     # React frontend
├── public/
│
├── Dockerfile              # Deployment config
├── package.json
├── README.md
```

---

## 🚀 Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/Codingwithpiyush/FinTrack-Pro-finance-dashboard.git
cd FinTrack-Pro-finance-dashboard
```

---

### 2. Install Dependencies

```bash
npm install
cd backend && npm install
```

---

### 3. Run Backend

```bash
cd backend
node server.js
```

---

### 4. Run Frontend

```bash
cd ..
npm run dev
```

---

## 🌐 API Endpoints

| Endpoint | Method | Description       |
| -------- | ------ | ----------------- |
| `/reset` | GET    | Reset environment |
| `/step`  | POST   | Perform action    |
| `/state` | GET    | Get current state |

---

## 🐳 Docker Deployment

### Build Image

```bash
docker build -t fintrack .
```

### Run Container

```bash
docker run -p 7860:7860 fintrack
```

---

## 🌍 Deployment Links

* 🔗 **GitHub Repo**
  https://github.com/Codingwithpiyush/FinTrack-Pro-finance-dashboard

* 🔗 **Hugging Face Space**
  👉 *(Add your deployed link here)*

---

## 🧪 Hackathon Requirement Mapping

| Requirement         | Status                    |
| ------------------- | ------------------------- |
| Real-world task     | ✅ Financial management    |
| OpenEnv API         | ✅ step/reset/state        |
| 3 difficulty levels | ✅ Easy / Medium / Hard    |
| Reward shaping      | ✅ Continuous + meaningful |
| Baseline agent      | ✅ Implemented             |
| Docker support      | ✅ Included                |
| HF deployment       | ✅ Ready                   |
| Documentation       | ✅ Complete                |

---

## 💡 Key Highlights

* Real-world simulation (not toy problem)
* Clear state-action-reward structure
* Multi-level difficulty progression
* Agent-evaluable environment
* Clean modular architecture

---

## 🚀 Future Improvements

* Reinforcement Learning agent training
* Real financial dataset integration
* Budget prediction using ML
* Multi-user simulation

---

## 👨‍💻 Author

**Piyush Munde**
Full Stack Developer | AI Enthusiast
GitHub: https://github.com/Codingwithpiyush
