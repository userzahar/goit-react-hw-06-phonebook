import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts: (state, action) => {
      console.log('💚 ~ state:', state);
      console.log('💙 ~ action:', action);
      return { filter: action.payload };
    },
  },
});

export const filterReducer = filterSlice.reducer;
console.log('🚀 ~ filterReducer:', filterReducer);

export const { filterContacts } = filterSlice.actions;
