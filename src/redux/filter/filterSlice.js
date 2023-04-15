import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState';
const filterSlice = createSlice({
  name: 'CONTACTS_FILTER',
  initialState: initialState.filter,
  reducers: {
    filterContacts: (state, action) => ({ ...state, filter: action.payload }),
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterContacts } = filterSlice.actions;
