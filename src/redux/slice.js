import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Volodymyr Zelenskyi', number: '+380-459-12-5678' },
    { id: 'id-2', name: 'Petro Poroshenko', number: '+380-443-89-1256' },
    { id: 'id-3', name: 'Viktor Yushchenko', number: '+380-645-17-7943' },
  ],
  reducers: {
    add(state, action) {
      return [...state, action.payload];
    },
    remove(state, action) {
      state.filter(contact => contact.id !== action.payload.id);
    },
    filter(state, action) {
      state.filter(({ name }) => {
        return name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
      });
    },
  },
});

export const { add, remove, filter } = counterSlice.actions;
console.log('🚀 ~ add:', add);
