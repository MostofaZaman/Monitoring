import React, { useState } from 'react';
import './Billing.css';

// Placeholder data for invoices
const invoices = [
  { id: 'INV-2025-003', date: '2025-08-01', amount: '$99.00', status: 'Paid' },
  { id: 'INV-2025-002', date: '2025-07-01', amount: '$99.00', status: 'Paid' },
  { id: 'INV-2025-001', date: '2025-06-01', amount: '$25.00', status: 'Paid' },
];

const Billing = () => {
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    if (paymentAmount) {
      alert(`Simulating payment of $${paymentAmount}...\nRedirecting to payment gateway.`);
      setPaymentAmount('');
    } else {
      alert('Please enter an amount to pay.');
    }
  };

  return (
    <div className="billing-page">
      <h1>Billing & Payments</h1>

      <div className="billing-section">
        <h2>Invoice History</h2>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.date}</td>
                <td>{invoice.amount}</td>
                <td className={invoice.status === 'Paid' ? 'status-paid' : 'status-due'}>
                  {invoice.status}
                </td>
                <td>
                  <button className="download-btn">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="billing-section">
        <h2>Make a Payment</h2>
        <form className="payment-form" onSubmit={handlePayment}>
          <div className="form-group">
            <label htmlFor="paymentAmount">Payment Amount ($)</label>
            <input
              type="number"
              id="paymentAmount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              placeholder="Enter amount"
              min="1"
              step="any"
            />
          </div>
          <button type="submit" className="pay-btn">Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
};

export default Billing;
