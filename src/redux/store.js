import { createStore } from 'redux';
import { reducer } from './reducer';

export const store = createStore(reducer);
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
