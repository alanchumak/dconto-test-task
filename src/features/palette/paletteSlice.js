import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
  colors: {}
}

export const paletteSlice = createSlice({
  name: 'palette',
  initialState,

  reducers: {
    colorAdded: (state) => {
      const defaultColor = '#FF453A'
      const id = nanoid()
      state.colors[id] = defaultColor
    },
    colorUpdated: (state, action) => {
      const { id, color } = action.payload
      state.colors[id] = color
    },
    colorDeleted(state, action) {
      const {id} = action.payload
      delete state.colors[id]
    },
  }
});

export const { colorAdded, colorUpdated, colorDeleted } = paletteSlice.actions;
export const selectColors = (state) => state.palette.colors;
export default paletteSlice.reducer;
