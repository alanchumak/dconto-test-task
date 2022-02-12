import { createSlice } from '@reduxjs/toolkit';
import data from './data';


const initialState = {
    expansionState: getNodesExpandedState(data),
    selectionState: getNodesSelectedState(data),
    currentFocusedItemId: data[0].id,
    data: data
}

function getNodesSelectedState(data, nodesSelectedStateIds = {}) {
    return data.reduce((result, item) => {
        result[item.id] = item.isSelected;
        return getNodesSelectedState(item.children, result);
    }, nodesSelectedStateIds);
}

function getNodesExpandedState(data, nodes = {}) {
    return data.reduce((result, item) => {
        result[item.id] = false;
        return getNodesExpandedState(item.children, result);
    }, nodes);
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoryClicked(state, action) {
            const { categoryId } = action.payload
            const isExpanded = state.expansionState[categoryId]
            state.expansionState[categoryId] = !isExpanded
            state.currentFocusedItemId = categoryId
        },
        categorySelected(state, action) {
            const { categoryId } = action.payload
            const isSelected = state.selectionState[categoryId]
            state.selectionState[categoryId] = !isSelected
            state.currentFocusedItemId = categoryId
        },
        allCategoriesExpanded(state){ 
            for(let id in state.expansionState)
                state.expansionState[id] = true
        },
        allCategoriesCollapsed(state) {
            for (let id in state.expansionState)
                state.expansionState[id] = false
            state.currentFocusedItemId = state.data[0].id
        },
        allCategoriesDeselected(state) {
            for (let id in state.selectionState){
                state.expansionState[id] = true
                state.selectionState[id] = false
            }
        },
        allCategoriesSelected(state) {
            for (let id in state.selectionState) {
                state.expansionState[id] = true
                state.selectionState[id] = true
            }
        },
        categoryFiltered(state, action){
            const { parentsId, categoryId} = action.payload
            parentsId.forEach(id => state.expansionState[id] = true)
            state.currentFocusedItemId = categoryId; 
        }
       
    }
});

export const { categoryClicked, categorySelected, 
    allCategoriesExpanded, allCategoriesCollapsed, allCategoriesDeselected, allCategoriesSelected,
    categoryFiltered } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const selectIsExpandedById = (state, id) => state.categories.expansionState[id]