import { combineReducers } from 'redux';
import { initialState } from './initialState';
import { CONTACTS_FILTER, CONTACTS_REMOVE, CONTACTS_ADD } from './types';
function contactsReducer(state = initialState, action) {
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
          ...state.contacts.filter(contact => contact.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
}
function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACTS_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});
