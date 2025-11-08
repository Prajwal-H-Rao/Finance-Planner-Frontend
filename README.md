# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

---

# 📊 Dashboard — Finance Planner

The **Dashboard** is the central hub of the Finance Planner app.  
It gives users an overview of their financial activity — balances, income, expenses, budgets, and insights — in an intuitive and visual way.

---

## 🎯 Purpose

Provide users with a **real-time snapshot** of their financial health through data visualization and interactive components.  
The dashboard integrates data from multiple backend models — `User`, `Account`, `Transaction`, `Budget`, and `Category`.

---

## 🧩 Dashboard Components

### 1. 🪙 **Total Balance Card**

- Displays the sum of all account balances.
- Optionally shows:
  - **Net Worth** (Assets - Liabilities)
  - Currency (auto-fetched from user settings)
- API: `GET /api/accounts/summary`

---

### 2. 📈 **Income vs Expense Summary**

- Visual comparison between total income and total expense for the selected month.
- Visualization: Bar chart or donut chart.
- API: `GET /api/transactions/summary?month=<month>`

---

### 3. 🕒 **Recent Transactions**

- Table or list of the latest 5–10 transactions.
- Each transaction shows:
  - Category icon & color
  - Amount (positive/negative)
  - Merchant/description
  - Date
- API: `GET /api/transactions/recent`

---

### 4. 🧾 **Category-Wise Expense Breakdown**

- Displays how much the user has spent per category.
- Visualization: **Pie Chart / Donut Chart**
- Example: Food – 35%, Rent – 25%, Travel – 10%, etc.
- API: `GET /api/transactions/by-category`

---

### 5. 📅 **Monthly Trends**

- Line/Area chart showing monthly spending and income trends.
- Helps visualize growth or reduction in spending.
- Visualization: Line chart with dual lines (Income, Expense).
- API: `GET /api/transactions/monthly-trends`

---

### 6. 💡 **Budget Utilization**

- Shows each budgeted category and how much of it has been spent.
- Visualization: Progress bar or radial chart.
- Example: Groceries — 75% used.
- API: `GET /api/budgets/utilization`

---

### 7. 🧠 **Spending Insights**

- Smart cards providing insights like:
  - “Your travel expenses increased by 18% this month.”
  - “You are 80% through your entertainment budget.”
- API combines data from transactions and budgets:
  - `GET /api/insights/spending`

---

### 8. 🎯 **Goals & Savings Tracker**

- (Optional module)
- Shows custom savings goals created by the user.
- Visualization: Progress bar toward goal completion.
- API: `GET /api/goals` _(future feature)_

---

## 📊 Data Visualization Ideas

| Data               | Chart Type        | Library             |
| ------------------ | ----------------- | ------------------- |
| Income vs Expense  | Bar / Donut       | Recharts / Chart.js |
| Category Breakdown | Pie / Donut       | Recharts            |
| Budget Usage       | Progress / Radial | DaisyUI / Recharts  |
| Trends Over Time   | Line / Area       | Recharts            |
| Merchant Ranking   | Horizontal Bar    | Recharts            |

---

## ⚙️ Filters and Interactivity

- **Date Range Filter** – View data for week/month/year.
- **Category Filter** – Filter dashboard charts by category.
- **Dynamic Refresh** – Re-fetch data automatically when filters change.
- **Tooltips & Hover Effects** – Show details on data points.
- **Theme-Aware UI** – Works with light/dark mode.

---

## 🧭 Navigation Suggestions

- **Quick Links Section:**
  - Add Transaction ➜ `/transactions/new`
  - Add Budget ➜ `/budgets/new`
  - View Accounts ➜ `/accounts`
  - Manage Categories ➜ `/categories`

---

## 🔮 Future Enhancements

- **AI-based Expense Categorization** (auto-tag new transactions)
- **Expense Forecasting** using historical data
- **Budget Recommendations**
- **PDF/CSV Export** for dashboard data
- **Notifications** for budget overspend or low balance

---
