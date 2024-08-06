import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { IBookInCart } from '@/lib/data'
import exp from 'constants';
import { count } from 'console';

// // Define a type for the slice state
interface CartState {
  items: IBookInCart[];
}

// // Define the initial state using that type
const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IBookInCart>) {
            state.items = [...state.items, action.payload];
            
          },
        removeFromCart(state, action: PayloadAction<{ id: string }>) {
      //...use id that we have passed and remove the item from basket with that id
      state.items = state.items.filter(item => item.id !== action.payload.id);

      // let newBasket = [...state.items];

      
      // newBasket.filter(item => item.id !== action.payload.id)


      // // find index of first item in basket
      // const index = state.items.findIndex(
      //   (item) => item.id === action.payload.id
      // );

      // console.log(index, "index");

      // if (index !== -1) {
      //   //splice item out of basket
      //   newBasket.splice(index, 1);
      //   state.items = newBasket;
      // } else {
      //   console.warn(`Can't remove product as its not in basket`);
      // }
          },
        increaseCount(state, action: PayloadAction<{ id: string }>) {
          state.items = state.items.map((item) => (
            item.id === action.payload.id 
            ? {...item, "count": item.count+1} 
            : item
          ));
        },

        decreaseCount (state, action: PayloadAction<{ id: string }>) {
          state.items = state.items.map((item) => (
            item.id === action.payload.id 
            ? {...item, "count": item.count-1} 
            : item
          ));
        },
  },
});

export const { addToCart, removeFromCart, increaseCount, decreaseCount } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.length;

// export const increaseCount = (state: RootState) => state.cart.items.item.count += 1;
// export const decreaseCount = (state: RootState) => state.cart.items.item.count -= 1;


export const selectCartTotal = (state: RootState) => {
  const totalAmount: number = state.cart.items.reduce((previosValue: number, currentItem: IBookInCart): number => {
    if(currentItem.price) {
        return (previosValue + currentItem.count * currentItem.price)
    } else return previosValue
    
}, 0);
  return totalAmount;
};

export default cartSlice.reducer;