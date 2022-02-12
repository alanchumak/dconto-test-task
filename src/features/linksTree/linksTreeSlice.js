import { createSlice } from '@reduxjs/toolkit';
import initRectCoords from './initRectCoords'
import data from './data'

const initialState = {
    displayDepth: 3,
    scale: 1,
    data,
    linkCoordinates: initRectCoords(data, 3, 1)
}

export const linksTreeSlice = createSlice({
    name: 'linksTree',
    initialState,
    reducers: {
        displayDepthChanged(state, action){
            const { displayDepth } = action.payload
            state.displayDepth = displayDepth
            state.linkCoordinates = initRectCoords(data, displayDepth, state.scale)
        },
        scaleChanged(state, action) {
            const {scale} = action.payload
            state.scale = scale
            state.linkCoordinates = initRectCoords(data, state.displayDepth, scale)
        }
    }
})

export const { displayDepthChanged, scaleChanged} = linksTreeSlice.actions

export default linksTreeSlice.reducer;
