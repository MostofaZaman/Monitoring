import React from 'react';
import PackageCard from '../components/subscription/PackageCard';
import './Subscription.css';

const packages = [
  {
    name: 'Basic',
    price: '$25 / month',
    features: [
      '10,000 API Hits',
      'Basic Support',
      'Access to NID Verification API'
    ],
    isFeatured: false,
  },
  {
    name: 'Pro',
    price: '$99 / month',
    features: [
      '50,000 API Hits',
      'Priority Support',
      'Access to NID Verification API',
      'Detailed Analytics'
    ],
    isFeatured: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Unlimited API Hits',
      'Dedicated Support & SLA',
      'Access to All APIs',
      'Advanced Analytics & Reporting'
    ],
    isFeatured: false,
  },
];

const Subscription = () => {
  return (
    <div className="subscription-page">
      <div className="subscription-header">
        <h1>Choose Your Plan</h1>
        <p>Select the perfect plan to fit your needs. Upgrade, downgrade, or cancel anytime.</p>
      </div>
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            name={pkg.name}
            price={pkg.price}
            features={pkg.features}
            isFeatured={pkg.isFeatured}
          />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
