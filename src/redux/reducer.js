import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/reducer';
import { filterReducer } from './filter/reducer';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});
