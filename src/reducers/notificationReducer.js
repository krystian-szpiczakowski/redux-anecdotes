import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {message: ''},
    reducers: {
        setNotification(state, action) {
            state.message = action.payload
        },
        clearNotification(state) {
            state.message = ''
        }
    }
})

export default notificationSlice.reducer
export const { setNotification, clearNotification } = notificationSlice.actions