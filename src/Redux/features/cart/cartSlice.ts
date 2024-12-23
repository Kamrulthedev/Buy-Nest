import { AddToCartPayload } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
  id: string;
  name: string;
  quantity: number;
};

type TCard = {
  id: string;
  name: string;
  items: TCartItem[];
};

type TCart = {
  cards: TCard[];
};

const initialState: TCart = {
  cards: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<{ cardId: string; cardName: string }>) => {
      state.cards.push({
        id: action.payload.cardId,
        name: action.payload.cardName,
        items: [],
      });
    },
    updateCardName: (state, action: PayloadAction<{ cardId: string; newName: string }>) => {
      // Find the card by ID and update its name
      const card = state.cards.find((card) => card.id === action.payload.cardId);
      if (card) {
        card.name = action.payload.newName;
      }
    },
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const { shop, quantity, cardId } = action.payload;

      // Find the card by ID and add an item to it
      const card = state.cards.find((card) => card.id === cardId);
      if (card) {
        const existingItem = card.items.find((item) => item.id === shop.id);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          card.items.push({
            id: shop.id,
            name: shop.name,
            quantity,
          });
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      state.cards = state.cards.filter((card) => card.id !== cardId);
    },
    
    resetCart: (state) => {
      state.cards = []; 
    },
  },
});

export const { addCard, updateCardName, addToCart, removeFromCart, resetCart  } = cartSlice.actions;
export default cartSlice.reducer;
