import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPassenger, setCurrentSelectedPassenger, addPrice } from '../store/orderSlice';

const MealList = ({ meals }) => {
    const dispatch = useDispatch();
    const currentUserId = useSelector((state) => state.orders.currentSelectedPassengerId);
    const selectedLabel = useSelector((state) => state.orders.label);
    let totalCost = 0;
    let currentMealId = null;
    let currentDrinkId = null;
    const handleClick = (price, mealId, drinkId = null) => {
        console.log("label", selectedLabel);
        price = Number(price)
        if (currentUserId) {
            if (mealId && drinkId) {
                if (currentMealId === mealId) {
                    if (currentDrinkId) {
                        console.log("hello")
                        totalCost -= meals.find((meal) => meal.id === mealId).drinks.find((drink) => drink.id === currentDrinkId).price;
                        totalCost += price;
                        currentDrinkId = drinkId;
                    }
                    else {
                        currentDrinkId = drinkId;
                        totalCost += price;
                    }
                }
                else{
                    alert("Please Select The Meal First")
                }

            }
            else if (mealId && !drinkId) {
                if (!currentMealId) {
                    currentMealId = mealId;
                    totalCost += price;
                }
                else if (currentMealId != mealId) {
                    currentMealId = mealId;
                    currentDrinkId = null;
                    totalCost += price;
                }

            }
            
            let user = {
                id: currentUserId,
                price: totalCost
            };
            dispatch(addPassenger(user));
            dispatch(setCurrentSelectedPassenger(user));
            dispatch(addPrice(totalCost));
        }
        else{
            alert("Please select a passenger first")
        }
    };

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {meals.filter((meal) =>!selectedLabel || meal.labels.includes(selectedLabel)).map((meal) => (
                <div key={meal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={meal.img} alt={meal.title} className="w-full h-56 object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{meal.title}</h3>
                        <p className="text-gray-600 mb-2">{meal.starter}</p>
                        <p className="text-gray-600 mb-2">{meal.desert}</p>
                        <p className="text-gray-800 font-bold mb-4">${meal.price.toFixed(2)}</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded w-1/3"
                            onClick={() => handleClick(meal.price.toFixed(2), meal.id)}
                        >
                            Select
                        </button>
                        <select
                            className="w-full border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                            onChange={(e) => handleClick(meal.drinks.find(drink => drink.id === e.target.value).price, meal.id,
                                meal.drinks.find(drink => drink.id === e.target.value).id)}
                        >
                            <option value="">Select Drink</option>
                            {meal.drinks.map((drink) => (
                                <option key={drink.id} value={drink.id}>
                                    {drink.title} (${drink.price.toFixed(2)})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MealList;
