const initialState = {
    content: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTER':
            const normalizedContent = action.payload.content || ''
            const changedState = {...state, content: normalizedContent}
            return changedState
        default: return state
    }
}

export const filterContentAction = content => {
    const normalizedContent = content || ''
    return {
        type: 'FILTER',
        payload: {
            content: normalizedContent
        }
    }
}

export default reducer