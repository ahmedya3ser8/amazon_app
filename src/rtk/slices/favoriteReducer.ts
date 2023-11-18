import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { favoriteType } from "../../types/app";

interface favoriteState {
  favoriteItems: favoriteType[];
}

const initialState: favoriteState = {
  favoriteItems: localStorage.getItem('favorite-products') ? JSON.parse(localStorage.getItem('favorite-products')!) : []
}

const favoriteReducer = createSlice({
  initialState,
  name: 'favoriteReducer',
  reducers: {
    addToFavorite: (state, action: PayloadAction<favoriteType>) => {
      const productExist = state.favoriteItems.find(product => product.id === action.payload.id);
      const removeFromFavorite = state.favoriteItems.filter(product => product.id !== action.payload.id)
      if(!productExist) {
        state.favoriteItems.push(action.payload);
        toast.success(`${action.payload.title} added to cart`, {
          position: 'bottom-left',
          autoClose: 1500,
        });
      } else {
        state.favoriteItems = removeFromFavorite;
        toast.warning('Item has removed', {
          position: 'bottom-left',
          autoClose: 1500,
        });
      }
      localStorage.setItem('favorite-products', JSON.stringify(state.favoriteItems));
    },
    clearProductsFromFavorite: (state) => {
      state.favoriteItems = [];
      localStorage.setItem('favorite-products', JSON.stringify(state.favoriteItems));
      toast.warning('You have removed all items', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    }
  }
});


export const {addToFavorite, clearProductsFromFavorite} = favoriteReducer.actions;
export default favoriteReducer.reducer;