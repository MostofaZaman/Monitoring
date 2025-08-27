import React from 'react';
import './BillingSummary.css';

const BillingSummary = ({ outstanding, dueDate }) => {
  return (
    <div className="billing-summary widget">
      <h3>Billing Summary</h3>
      <div className="summary-item">
        <span>Outstanding Balance:</span>
        <span className="amount">{outstanding}</span>
      </div>
      <div className="summary-item">
        <span>Next Due Date:</span>
        <span>{dueDate}</span>
      </div>
      <button className="pay-now-btn">Pay Now</button>
    </div>
  );
};

export default BillingSummary;
