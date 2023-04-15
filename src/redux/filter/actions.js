import { createAction } from '@reduxjs/toolkit';
import { CONTACTS_FILTER } from './types';

// export const filterContacts = value => ({
//   type: CONTACTS_FILTER,
//   payload: value,
// });

export const filterContacts = createAction(CONTACTS_FILTER);
