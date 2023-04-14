import { nanoid } from 'nanoid';
import { CONTACTS_FILTER, CONTACTS_REMOVE, CONTACTS_ADD } from './types';
export const addContact = data => ({
  type: CONTACTS_ADD,
  payload: {
    id: nanoid(),
    name: data.name,
    number: data.number,
  },
});
export const deleteContact = id => ({
  type: CONTACTS_REMOVE,
  payload: {
    id,
  },
});
export const filterContacts = value => ({
  type: CONTACTS_FILTER,
  payload: value,
});
