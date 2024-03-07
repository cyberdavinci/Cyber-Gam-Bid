import React from "react";
import DashboardSummary from "../../components/dashboard/DashboardSummary";
import DashboardChartSection from "../../components/dashboard/DashboardChartSection";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-2">
      <DashboardSummary />
      <DashboardChartSection />
    </div>
  );
};

export default Dashboard;
