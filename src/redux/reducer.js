import { contactsReducer } from './contacts/reducer';
import { filterReducer } from './filter/filterSlice';

export const reducer = {
  filter: filterReducer,
  contacts: contactsReducer,
};
