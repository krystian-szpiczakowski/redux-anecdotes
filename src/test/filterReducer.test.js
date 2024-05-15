import reducer from "../reducers/filterReducer"

describe("Anecdotes are filtered by anecdote text", () => {
    test("Default filter is empty", () => {
        const state = reducer(undefined, "do_nothing")
        expect(state.content).toBe('')
    })

    test("Change filter from default to abc", () => {
        const action = {
            type: 'FILTER',
            payload: {
                content: "abc"
            }
        }
        const state = reducer(undefined, action)
        expect(state.content).toBe('abc')
    })

    test("When passing undefined content set empty string", () => {
        const action = {
            type: 'FILTER',
            payload: {
                content: undefined
            }
        }
        const state = reducer(undefined, action)
        expect(state.content).toBe('')
    })

    test("Update filter multiple times", () => {
        const firstAction = {
            type: 'FILTER',
            payload: {
                content: "abc"
            }
        }

        const anotherAction = {
            type: 'FILTER',
            payload: {
                content: "abcdef"
            }
        }
        let state = reducer(undefined, firstAction)
        state = reducer(state, anotherAction)
        expect(state.content).toBe('abcdef')
    })
})