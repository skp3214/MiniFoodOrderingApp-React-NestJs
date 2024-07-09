import React from 'react';
import { useSelector } from 'react-redux';

const TotalPrice = () => {
  const totalPrice = useSelector((state) => state.orders.allPassengerTotalprice);

  return (
    <div className="flex py-4 ">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Total Price For All Passengers:
        </h2>
        <p className="mt-4 text-2xl font-bold text-green-600">
          ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default TotalPrice;
