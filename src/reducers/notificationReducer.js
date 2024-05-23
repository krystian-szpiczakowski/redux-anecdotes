import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: { message: '' },
    reducers: {
        setNotification(state, action) {
            state.message = action.payload
        },
        clearNotification(state) {
            state.message = ''
        }
    }
})

export const setNotificationWithTime = (content) => {
    return async dispatch => {
        dispatch(setNotification(content))
        setTimeout(() => {
            dispatch(clearNotification())
        }, 2000)
    }
}

export default notificationSlice.reducer
export const { clearNotification, setNotification } = notificationSlice.actions