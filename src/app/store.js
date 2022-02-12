import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import linksTreeReducer from '../features/linksTree/linksTreeSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    // linksTree: linksTreeReducer,
  },
});
