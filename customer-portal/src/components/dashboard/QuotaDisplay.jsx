import React from 'react';
import './QuotaDisplay.css';

const QuotaDisplay = ({ used, total }) => {
  const remaining = total - used;
  const percentage = total > 0 ? (remaining / total) * 100 : 0;

  return (
    <div className="quota-display widget">
      <h3>API Quota</h3>
      <p><strong>Remaining Hits:</strong> {remaining.toLocaleString()}</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p>{used.toLocaleString()} / {total.toLocaleString()} hits used</p>
    </div>
  );
};

export default QuotaDisplay;
