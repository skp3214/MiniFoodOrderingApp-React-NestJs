import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPassenger,removePassenger,setCurrentSelectedPassengerId } from '../store/orderSlice';
const PassengerList = ({ passengers }) => {
    const [selectedPassengerIds, setSelectedPassengerIds] = useState(new Set());
    const dispatch=useDispatch();
    const handleSelectPassenger = (id) => {
        setSelectedPassengerIds(prevSelected => {
            const updatedSelected = new Set(prevSelected);
            if (updatedSelected.has(id)) {
                updatedSelected.delete(id);
                dispatch(removePassenger({ id }))
            } else {
                updatedSelected.add(id);
                dispatch(setCurrentSelectedPassengerId(id))
            }
            return updatedSelected;
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-2xl font-semibold mb-4">Passenger List</h3>
            {passengers.map((passenger) => (
                <div 
                    key={passenger.id} 
                    className={`flex items-center justify-between p-4 mb-4 border rounded ${selectedPassengerIds.has(passenger.id) ? 'bg-blue-100' : 'bg-gray-50'}`}
                >
                    <p className="text-gray-700 font-semibold">{passenger.name}</p>
                    <button 
                        onClick={() => handleSelectPassenger(passenger.id)} 
                        className={`px-4 py-2 rounded ${selectedPassengerIds.has(passenger.id) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 hover:text-white focus:outline-none focus:ring focus:border-blue-300`}
                    >
                        Select this passenger for food ordering
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PassengerList;
