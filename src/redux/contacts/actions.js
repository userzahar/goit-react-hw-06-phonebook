import { nanoid } from 'nanoid';
import { CONTACTS_REMOVE, CONTACTS_ADD } from './types';
import { createAction } from '@reduxjs/toolkit';

export const addContact = data => ({
  type: CONTACTS_ADD,
  payload: {
    id: nanoid(),
    name: data.name,
    number: data.number,
  },
});
// export const deleteContact = id => ({
//   type: CONTACTS_REMOVE,
//   payload: {
//     id,
//   },
// });

export const deleteContact = createAction(CONTACTS_REMOVE);
