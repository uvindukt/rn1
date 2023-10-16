import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
    remove: (state, action) => {
      state.items = state.items.filter(item => item.id != action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = itemsSlice.actions

export default itemsSlice.reducer