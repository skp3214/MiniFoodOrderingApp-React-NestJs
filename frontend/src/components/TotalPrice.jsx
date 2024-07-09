import React from 'react';
import { useSelector } from 'react-redux';
import { passengers } from './data';

const TotalPrice = () => {
  const totalPrice = useSelector((state) => state.orders.allPassengerTotalprice);
  const allSelectedPassenger = useSelector((state) => state.orders.AllSelectedPassenger);

  return (
    <div className="flex flex-col py-4 space-y-4">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Total Price For All Passengers:
        </h2>
        <p className="mt-4 text-2xl font-bold text-green-600">
          ${totalPrice.toFixed(2)}
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Each Passengers Price:</h2>
        <div className="space-y-2">
          {allSelectedPassenger && allSelectedPassenger.map((passenger) => (
            <div key={passenger.id} className="flex justify-between items-center p-2 bg-gray-100 rounded">
              <p className="text-gray-800 font-medium">
                {passengers.find((p) => p.id === passenger.id).name}
              </p>
              <p className="text-gray-800 font-medium">${passenger.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
