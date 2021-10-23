import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
   stock: stockReducer,
  },
});
