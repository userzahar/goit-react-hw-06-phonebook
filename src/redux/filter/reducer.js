import { initialState } from 'redux/initialState';
import { CONTACTS_FILTER } from './types';

export function filterReducer(state = initialState, action) {
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
