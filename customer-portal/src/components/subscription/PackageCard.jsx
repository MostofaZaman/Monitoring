import React from 'react';
import './PackageCard.css';

const PackageCard = ({ name, price, features, isFeatured }) => {
  const cardClasses = `package-card ${isFeatured ? 'featured' : ''}`;

  return (
    <div className={cardClasses}>
      {isFeatured && <div className="featured-banner">Most Popular</div>}
      <h2>{name}</h2>
      <p className="price">{price}</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="select-plan-btn">Select Plan</button>
    </div>
  );
};

export default PackageCard;
