/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
    cart: any;
    id: string
    productId: string;
    product: {
        id: string,
        name: string,
        price: string
    }
    cartId: string;
    quantity: number;
};

type TCartSummary = {
    CartItems: TCartItem[];
    totalQuantity: number;
    totalPrice: number;
};

const initialState: TCartSummary = {
    CartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cardItemSlice = createSlice({
    name: "CartItem",
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<TCartSummary>) => {
            state.CartItems = action.payload.CartItems;
            state.totalQuantity = action.payload.totalQuantity;
            state.totalPrice = action.payload.totalPrice;
        },
        resetCart: (state) => {
            state.CartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { setCart, resetCart } = cardItemSlice.actions;
export default cardItemSlice.reducer;
