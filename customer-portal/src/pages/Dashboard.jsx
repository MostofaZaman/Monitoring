import React from 'react';
import QuotaDisplay from '../components/dashboard/QuotaDisplay';
import UsageChart from '../components/dashboard/UsageChart';
import BillingSummary from '../components/dashboard/BillingSummary';
import './Dashboard.css';

// Placeholder data
const usageData = [
  { name: 'Day 1', hits: 400 },
  { name: 'Day 5', hits: 300 },
  { name: 'Day 10', hits: 600 },
  { name: 'Day 15', hits: 800 },
  { name: 'Day 20', hits: 700 },
  { name: 'Day 25', hits: 900 },
  { name: 'Day 30', hits: 1200 },
];

const quotaInfo = {
  used: 4500,
  total: 10000,
};

const billingInfo = {
  outstanding: '$50.00',
  dueDate: '2025-09-30',
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, Customer!</h1>
        <p>Here is a summary of your account activity.</p>
      </div>
      <div className="dashboard-widgets">
        <QuotaDisplay used={quotaInfo.used} total={quotaInfo.total} />
        <UsageChart data={usageData} />
        <BillingSummary outstanding={billingInfo.outstanding} dueDate={billingInfo.dueDate} />
      </div>
    </div>
  );
};

export default Dashboard;
