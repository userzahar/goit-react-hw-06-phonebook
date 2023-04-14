import { contactsInitialState } from './contacts/initialState';
import { filterInitialState } from './filter/initialState';

export const initialState = {
  filter: filterInitialState,
  contacts: contactsInitialState,
};
