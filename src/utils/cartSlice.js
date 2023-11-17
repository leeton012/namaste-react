import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  // reducer function will be called here
  reducers: {
    addItem: (state, action) => {
      console.log('🚀 ~ file: cartSlice.js:11 ~ state:', state.items);

      //Vanilla(Older Redux) Don't Mutate the state
      // const newState = [...state];
      // newState.items.pish(action.payload);
      // return newState

      //Redux Toolkit - We have to mutate the state
      //Redux Toolkit uses immerJS  behind the scene
      // mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items:['Pizza]}
    clearCart: (state, action) => {
      //for modify the poriginal array or state we can't use state =[], It basically it modifies the reference to the state

      //Redux ToolKit --> either mutate the existing state or return a new state
      // state.items.length = 0; // []    -----OR-----
      return { items: [] }; // this new [] will be replaced inside the original {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
