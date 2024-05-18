import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    content: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        filterByContent(state, action) {
            const normalizedContent = action.payload.content || ''            
            state.content = normalizedContent
        }
    }
})

export default filterSlice.reducer
export const { filterByContent } = filterSlice.actions