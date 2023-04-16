import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState';
const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: (state, action) => {
      console.log('❗ state', state);
      console.log('🔇', action);

      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact: (state, action) => ({
      ...state,
      contacts: [
        ...state.contacts.filter(contact => contact.id !== action.payload),
      ],
    }),
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
