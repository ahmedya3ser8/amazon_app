import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { cartType } from '../../types/app';

interface CartState {
  cartItems: cartType[];
}

const initialState: CartState = {
  cartItems: localStorage.getItem('cart-Products')
    ? JSON.parse(localStorage.getItem('cart-Products')!) // Using non-null assertion here for simplicity
    : [],
};

const cartReducer = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    addToCart: (state, action: PayloadAction<cartType>) => {
      const productExist = state.cartItems.find(product => product.id === action.payload.id);
      if (productExist) {
        productExist.quantity += 1;
        toast.info('Increased product quantity', {
          position: 'bottom-left',
          autoClose: 1500,
        });
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.cartItems.push(productClone);
        toast.success(`${action.payload.title} added to cart`, {
          position: 'bottom-left',
          autoClose: 1500,
        });
      }
      localStorage.setItem('cart-Products', JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action: PayloadAction<cartType>) => {
      const removeItem = state.cartItems.filter(product => product.id !== action.payload.id);
      state.cartItems = removeItem;
      localStorage.setItem('cart-Products', JSON.stringify(state.cartItems));
      toast.warning('Item has been removed', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    },
    decreaseQuantity: (state, action: PayloadAction<cartType>) => {
      const productExist = state.cartItems.find(product => product.id === action.payload.id);
      if (productExist && productExist.quantity !== 0) {
        productExist.quantity -= 1;
      }
      localStorage.setItem('cart-Products', JSON.stringify(state.cartItems));
      toast.info('Decreased product quantity', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    },
    clearItemsFromCart: state => {
      state.cartItems = [];
      localStorage.setItem('cart-Products', JSON.stringify(state.cartItems));
      toast.warning('You have removed all items', {
        position: 'bottom-left',
        autoClose: 1500,
      });
    },
  },
});

export const {addToCart, removeItemFromCart, decreaseQuantity, clearItemsFromCart} = cartReducer.actions;
export default cartReducer.reducer;
