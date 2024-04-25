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
        removeToCard: (state, action) => {
            const indexRemove = action.payload
            state.data.splice(indexRemove, 1)
        },
        decToCart: ()=>{
            return initialState
        }
    }
})

export const {addToCard,removeToCard, decToCart} = cart.actions
export default cart.reducer