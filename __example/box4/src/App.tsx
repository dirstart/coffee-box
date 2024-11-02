import React from 'react';
import { FlavorProfile } from './components/FlavorProfile';
import { CalorieTable } from './components/CalorieTable';
import { NutritionTable } from './components/NutritionTable';

function App() {
  const labels = ['清香', '花香', '果香', '蜜香', '木质香'];
  const data = [3, 2, 1.5, 2, 2.5];
  const notes = ['糯米', '清香', '奶油'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 space-y-12">
        <FlavorProfile 
          data={data}
          labels={labels}
          notes={notes}
        />
        <CalorieTable />
        <NutritionTable />
      </div>
    </div>
  );
}

export default App;
