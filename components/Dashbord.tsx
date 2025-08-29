import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import StatCard from "@/components/StatCard";
import { useLanguage } from "@/components/LanguageContext";
import translations from "@/trancelate/trancelate";
import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";

// Make sure your translations file includes a 'dashboard' key for each language

const dashbord = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations].dashboard;
  // Sample data
  // Freelance-related data
  const salesData = [
    { month: t.months.jan, projects: 12, earnings: 2400 },
    { month: t.months.feb, projects: 15, earnings: 3200 },
    { month: t.months.mar, projects: 10, earnings: 2100 },
    { month: t.months.apr, projects: 18, earnings: 4100 },
    { month: t.months.may, projects: 22, earnings: 5200 },
    { month: t.months.jun, projects: 19, earnings: 4700 },
  ];

  const pieData = t.pieData;
  const recentProjects = t.recentProjects;
  return (
    <div className="min-h-screen px-2 py-8 bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 sm:px-6 lg:px-12">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 pt-4 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
        <StatCard
          title={t.statCards.totalEarnings}
          value="$18,300"
          Icon={DollarSign}
          change={14.2}
          color="#10b981"
        />
        <StatCard
          title={t.statCards.activeClients}
          value="27"
          Icon={Users}
          change={6.8}
          color="#3b82f6"
        />
        <StatCard
          title={t.statCards.projectsCompleted}
          value="112"
          Icon={ShoppingCart}
          change={9.5}
          color="#f59e0b"
        />
        <StatCard
          title={t.statCards.profileViews}
          value="2,340"
          Icon={TrendingUp}
          change={3.1}
          color="#8b5cf6"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-4 mb-8 xl:grid-cols-2 sm:gap-6">
        {/* Bar Chart */}
        <div className="p-4 border border-blue-100 rounded-lg shadow-md bg-white/90 dark:bg-gray-900/90 dark:border-gray-800 sm:p-6">
          <h3 className="mb-4 text-lg font-semibold text-blue-700 dark:text-blue-300">
            {t.charts.projectsEarningsOverview}
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
              <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
              <Tooltip />
              <Bar
                dataKey="projects"
                fill="#3b82f6"
                name={t.charts.projects}
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="earnings"
                fill="#10b981"
                name={t.charts.earnings}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Line Chart */}
        <div className="p-4 border border-blue-100 rounded-lg shadow-md bg-white/90 dark:bg-gray-900/90 dark:border-gray-800 sm:p-6">
          <h3 className="mb-4 text-lg font-semibold text-blue-700 dark:text-blue-300">
            {t.charts.earningsTrend}
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} />
              <YAxis tick={{ fontSize: 12, fill: "#64748b" }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: "#8b5cf6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="grid grid-cols-1 gap-4 mb-8 sm:gap-6">
        <div className="p-4 border border-blue-100 rounded-lg shadow-md bg-white/90 dark:bg-gray-900/90 dark:border-gray-800 lg:col-span-2 sm:p-6">
          <h3 className="mb-4 text-lg font-semibold text-blue-700 dark:text-blue-300">
            {t.recentProjectsTitle}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-blue-100 dark:border-gray-800">
                  <th className="px-2 py-2 text-sm font-medium text-left text-gray-600 dark:text-gray-300 sm:px-4 sm:text-base">
                    {t.tableHeaders.projectId}
                  </th>
                  <th className="px-2 py-2 text-sm font-medium text-left text-gray-600 dark:text-gray-300 sm:px-4 sm:text-base">
                    {t.tableHeaders.client}
                  </th>
                  <th className="px-2 py-2 text-sm font-medium text-left text-gray-600 dark:text-gray-300 sm:px-4 sm:text-base">
                    {t.tableHeaders.project}
                  </th>
                  <th className="px-2 py-2 text-sm font-medium text-left text-gray-600 dark:text-gray-300 sm:px-4 sm:text-base">
                    {t.tableHeaders.amount}
                  </th>
                  <th className="px-2 py-2 text-sm font-medium text-left text-gray-600 dark:text-gray-300 sm:px-4 sm:text-base">
                    {t.tableHeaders.status}
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((proj: any) => (
                  <tr
                    key={proj.id}
                    className="transition border-b border-blue-50 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-2 py-3 text-sm font-medium text-blue-600 dark:text-blue-300 sm:px-4 sm:text-base">
                      {proj.id}
                    </td>
                    <td className="px-2 py-3 text-sm sm:px-4 sm:text-base">
                      {proj.client}
                    </td>
                    <td className="px-2 py-3 text-sm sm:px-4 sm:text-base">
                      {proj.project}
                    </td>
                    <td className="px-2 py-3 text-sm font-semibold sm:px-4 sm:text-base">
                      {proj.amount}
                    </td>
                    <td className="px-2 py-3 sm:px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          proj.status === t.status.completed
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : proj.status === t.status.pending
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }`}
                      >
                        {proj.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Freelance Categories Pie Chart */}
      <div className="p-6 border border-blue-100 rounded-lg shadow-md bg-white/90 dark:bg-gray-900/90 dark:border-gray-800">
        <h3 className="mb-4 text-lg font-semibold text-blue-700 dark:text-blue-300">
          {t.pieChartTitle}
        </h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {pieData.map((item: any) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {item.name}
                </span>
              </div>
              <span className="text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dashbord;
