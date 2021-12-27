import { configureStore } from '@reduxjs/toolkit';
import likeCounterSlice from '../redux/likeCounterSlice';

export const store = configureStore({
  reducer: {
    likesCounter: likeCounterSlice,
  },
});
