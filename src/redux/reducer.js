import { contactsReducer } from './contacts/reducer';
import { filterReducer } from './filter/reducer';

export const reducer = {
  filter: filterReducer,
  contacts: contactsReducer,
};
