import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const dummy = {
  name: "Anirudh",
  currency: "₹",
  netWorth: 215500,
  monthIncome: 45000,
  monthSpend: 12900,

  trend: [
    { month: "Jan", expense: 15000, income: 42000 },
    { month: "Feb", expense: 17000, income: 43000 },
    { month: "Mar", expense: 12000, income: 45000 },
    { month: "Apr", expense: 16000, income: 44000 },
  ],

  categories: [
    { name: "Food", value: 4500 },
    { name: "Transport", value: 2500 },
    { name: "Shopping", value: 3000 },
    { name: "Bills", value: 2900 },
  ],

  upcomingBills: [
    { title: "Rent", dueIn: 4 },
    { title: "Internet", dueIn: 1 },
    { title: "Credit Card", dueIn: 9 },
  ],

  insights: [
    "Food spending is up 22% this month.",
    "You saved 13% more than last month.",
    "Groceries are below your usual range.",
  ],

  activity: [
    "₹500 spent on Travel",
    "Added note: 'Pay LIC by 5th'",
    "Task completed: 'Update PAN in bank'",
    "Salary credited: ₹45,000",
  ],
};

const Dashboard: React.FC = () => {
  const data = dummy;

  return (
    <div className="p-4 lg:p-8 space-y-8">
      {/* TOP HERO SECTION */}
      <div className="card bg-base-300 p-6 hover:shadow hover:scale-[1.01] transition-transform">
        <h1 className="text-2xl font-semibold">Welcome back, {data.name}</h1>

        <div className="stats bg-base-100 stats-vertical lg:stats-horizontal mt-4 shadow w-full">
          <div className="stat">
            <div className="stat-title">Net Worth</div>
            <div className="stat-value">
              {data.currency}
              {data.netWorth.toLocaleString()}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Income This Month</div>
            <div className="stat-value text-success">
              {data.currency}
              {data.monthIncome.toLocaleString()}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Spent This Month</div>
            <div className="stat-value text-error">
              {data.currency}
              {data.monthSpend.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {/* LINE CHART - FULL WIDTH ON MOBILE, 2/3 ON DESKTOP */}
        <div className="card bg-base-300 p-4 hover:shadow-xl lg:col-span-2 hover:scale-[1.01] transition-transform">
          <h2 className="text-lg font-semibold mb-4">Monthly Trend</h2>
          <div className="overflow-x-auto">
            <LineChart width={600} height={250} data={data.trend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="expense" stroke="#f87171" />
              <Line type="monotone" dataKey="income" stroke="#4ade80" />
            </LineChart>
          </div>
        </div>

        {/* DONUT CHART */}
        <div className="card bg-base-300 p-4 hover:shadow-xl hover:scale-[1.01] transition-transform">
          <h2 className="text-lg font-semibold mb-4">Category Breakdown</h2>
          <div className="flex justify-center no-focus-outline">
            <PieChart width={280} height={280}>
              <Pie
                data={data.categories}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {data.categories.map((_, index) => (
                  <Cell key={index} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>

      {/* BILLS + INSIGHTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BILLS */}
        <div className="card bg-base-300 p-4 hover:shadow-xl hover:scale-[1.01] transition-transform">
          <h2 className="text-lg font-semibold mb-3">Upcoming Bills</h2>
          <div className="space-y-3">
            {data.upcomingBills.map((b, i) => (
              <div key={i} className="flex justify-between border-b pb-2">
                <span>{b.title}</span>
                <span className="text-error">{b.dueIn} days</span>
              </div>
            ))}
          </div>
        </div>

        {/* INSIGHTS */}
        <div className="card bg-base-300 p-4 hover:shadow-xl hover:scale-[1.01] transition-transform">
          <h2 className="text-lg font-semibold mb-3">Insights</h2>
          {data.insights.map((msg, i) => (
            <div key={i} className="alert my-2">
              {msg}
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVITY FEED */}
      <div className="card bg-base-300 p-4 hover:shadow-xl hover:scale-[1.01] transition-transform ">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          {data.activity.map((act, i) => (
            <li key={i} className="border-l-4 border-primary pl-3">
              {act}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
