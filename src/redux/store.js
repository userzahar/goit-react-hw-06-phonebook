import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slice';
console.log('🚀 ~ counterSlice:', counterSlice.reducer);

export const store = configureStore({
  reducer: {
    clicks: counterSlice.reducer,
  },
});
