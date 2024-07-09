import React from 'react'
import { labels, meals, passengers, LabelList, MealList, PassengerList,TotalPrice } from './components'
const App = () => {
  return (
    <>
      <div className="container mx-auto bg-slate-50 p-4">
        <LabelList labels={labels} />
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <div className="flex-1">
            <MealList meals={meals} />
          </div>
          <div className="flex-1 ">
            <PassengerList passengers={passengers} />
            <TotalPrice />
          </div>
        </div>
      </div>
    </>
  )
}

export default App