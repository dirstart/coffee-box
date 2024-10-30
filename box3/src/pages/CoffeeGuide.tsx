import React from 'react';
import CoffeeList from '../components/CoffeeList';
import HealthyTips from '../components/HealthyTips';

const CoffeeGuide = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">咖啡营养指南</h1>
      <CoffeeList />
      <HealthyTips />
    </div>
  );
};

export default CoffeeGuide;