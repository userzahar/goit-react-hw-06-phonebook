import { createStore } from 'redux';
function reducer(state, action) {
  switch (action.type) {
    case 'contacts/filter':
      return {
        ...state,
        filter: action.payload,
      };
    case 'contacts/add':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/remove':
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

export const store = createStore(reducer, {
  filter: '',
  contacts: [
    { id: 'id-1', name: 'Volodymyr Zelenskyi', number: '+380-459-12-5678' },
    { id: 'id-2', name: 'Petro Poroshenko', number: '+380-443-89-1256' },
    { id: 'id-3', name: 'Viktor Yushchenko', number: '+380-645-17-7943' },
  ],
});
// console.log('🚀 ~ store:', store);
// console.log('💞 ~ getState:', store.getState());

// console.log(
//   '🕳 ~ contacts/remove:',
//   store.dispatch({
//     type: 'contacts/remove',
//     payload: {
//       id: 'id-1',
//     },
//   })
// );
// console.log(
//   '🖤 ~ contacts/add:',
//   store.dispatch({
//     type: 'contacts/add',
//     payload: {
//       id: 'id-4',
//       name: 'Yulia Timoshenko',
//       number: '+380-687-65-3456',
//     },
//   })
// );

// console.log('🚀 ~ getState:', store.getState());
