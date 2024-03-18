import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCard: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        decToCart: ()=>{
            return initialState
        }
    }
})

export const {addToCard, decToCart} = cart.actions
export default cart.reducer