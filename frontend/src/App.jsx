import React, { useEffect, useState } from 'react';
import { passengers, LabelList, MealList, PassengerList, TotalPrice } from './components';

const App = () => {
  const [meals, setMeals] = useState(null);
  const [labels, setLabels] = useState(null);

  const fetchMeals = async () => {
    const response = await fetch('http://localhost:3000/');
    const meals = await response.json();
    console.log(meals);
    setMeals(meals);
  };

  const fetchLabels = async () => {
    const response = await fetch('http://localhost:3000/labels');
    const labels = await response.json();
    console.log(labels);
    setLabels(labels);
  };

  useEffect(() => {
    fetchMeals();
    fetchLabels();
  }, []);

  return (
    <div className="container mx-auto bg-slate-50 p-4">
      {labels && <LabelList labels={labels} />}
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="flex-1">
          {meals && <MealList meals={meals} />}
        </div>
        <div className="flex-1">
          <PassengerList passengers={passengers} />
          <TotalPrice />
        </div>
      </div>
    </div>
  );
};

export default App;
