import { initialState } from 'redux/initialState';
import { CONTACTS_REMOVE, CONTACTS_ADD } from './types';

export function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACTS_ADD:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case CONTACTS_REMOVE:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => contact.id !== action.payload),
        ],
      };
    default:
      return state;
  }
}
