import { configureStore } from '@reduxjs/toolkit';
import merchantReducer from './slices/merchantSlice';

const store = configureStore({
  reducer: {
    merchant: merchantReducer,
  },
});

export default store;
