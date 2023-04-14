import { CONTACTS_FILTER } from './types';

export const filterContacts = value => ({
  type: CONTACTS_FILTER,
  payload: value,
});
