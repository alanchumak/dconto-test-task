import { configureStore } from '@reduxjs/toolkit';
import paletteReducer from '../features/palette/paletteSlice'

export const store = configureStore({
  reducer: {
    palette: paletteReducer
  },
});
