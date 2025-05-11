# ☀️ UNITY Yield Simulator

This is the official repository for the **Sunified UNITY Solar Yield Simulator** — an interactive web app that helps model and compare solar project revenue with and without UNITY IoT sensors.

---

## 🎯 Purpose

The simulator enables developers, asset owners, and investors to:

- Model **panel degradation and energy output** over time
- Simulate **revenue uplift** from UNITY sensor deployment
- Understand the impact of:
  - CapEx for UNITY chip + gateway
  - Ongoing PaaS license costs
  - Enhanced yield from telemetry-informed optimization

---

## 📈 Features

- Input sliders for:
  - Simulation years (5–10)
  - UNITY sensor CapEx per panel
  - UNITY annual license cost per panel
- Revenue projections for:
  - Standard solar farms
  - Farms enhanced with UNITY sensors
- Interactive chart (powered by Chart.js)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

```bash
git clone https://github.com/Sunified-Technologies-BV/Unity-Yield-Sim.git
cd Unity-Yield-Sim
npm install
npm run dev
```

Then open:  
[http://localhost:5173](http://localhost:5173)

---

## 🌍 Deploying to GitHub Pages

```bash
npm run build
npm run deploy
```

Live at:  
👉 https://sunified-technologies-bv.github.io/Unity-Yield-Sim/

---

## 🛠 Built With

- [Vite](https://vitejs.dev/)
- [Chart.js](https://www.chartjs.org/)
- HTML5, Vanilla JS, and CSS3

---

© 2025 Sunified Technologies BV. All rights reserved.
