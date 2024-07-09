import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    allPassengerTotalprice: 0,
    AllSelectedPassenger: [],
    currentSelectedPassenger: null,
    currentSelectedPassengerId: null,
    label: null
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        removePrice: (state, action) => {
            state.totalPrice -= action.payload;
        },
        addPassenger: (state, action) => {
            let userAlreadyExisted = state.AllSelectedPassenger.find(
                (user) => user.id === action.payload.id
            )
            if (userAlreadyExisted) {
                userAlreadyExisted.price = action.payload.price
                console.log("user already", userAlreadyExisted);
            }
            else {
                state.AllSelectedPassenger.push(action.payload)
            }
            state.allPassengerTotalprice = state.AllSelectedPassenger.map((user) => user.price)
                .reduce((acc, cur) => acc + cur, 0)
        },
        removePassenger: (state, action) => {
            state.AllSelectedPassenger = state.AllSelectedPassenger.filter((passenger) => passenger.id
                !== action.payload.id);
            state.allPassengerTotalprice = state.AllSelectedPassenger.map((user) => user.price)
                .reduce((acc, cur) => acc + cur, 0)
        },
        setCurrentSelectedPassengerId: (state, action) => {
            state.currentSelectedPassengerId = action.payload;
            console.log(state.currentSelectedPassengerId)
        },
        setCurrentSelectedPassenger: (state, action) => {
            state.currentSelectedPassenger = action.payload;
            console.log(state.currentSelectedPassenger)
        },
        setLabel: (state, action) => {
            state.label = action.payload;
        },


    }
})

export const { addPrice, removePrice, addPassenger, removePassenger, setCurrentSelectedPassengerId, setCurrentSelectedPassenger, setLabel } = orderSlice.actions;
export default orderSlice.reducer;
