import reducer from "../reducers/anecdoteReducer"
import deepFreeze from "deep-freeze"

describe('storing votes', () => {
    const initialState = [
        {
            id: 1,
            content: "Lorem ipsum",
            votes: 0
        },
        {
            id: 2,
            content: "Ipsum lorem",
            votes: 0
        },
        {
            id: 3,
            content: "Oh my!",
            votes: 0
        }
    ]

    test('all anecdotes have 0 votes at the beginning', () => {
        var action = {
            type: "DO_NOTHING"
        }

        const initialState = reducer(undefined, action)
        expect(initialState).toHaveLength(6)
        initialState.forEach(anecdote => expect(anecdote.votes).toBe(0))
    })

    test('single vote increments votes only for one anecdote', () => {
        const selectedId = 1

        var action = {
            type: "anecdotes/vote",
            payload: {
                id: selectedId
            }
        }

        deepFreeze(initialState)

        const state = reducer(initialState, action)
        const votedAnecdote = state.find(item => item.id === selectedId)
        expect(votedAnecdote.votes).toBe(1)
        
        const notVotedAnecdotes = state.filter(item => item.id !== selectedId)
        notVotedAnecdotes.forEach(anecdote => expect(anecdote.votes).toBe(0))
    })

    test('voting the same anecdote multiple times increments counter accordingly', () => {
        const selectedId = 2

        var action = {
            type: "anecdotes/vote",
            payload: {
                id: selectedId
            }
        }

        deepFreeze(initialState)

        let state = reducer(initialState, action)
        state = reducer(state, action)
        const votedAnecdote = state.find(item => item.id === selectedId)
        expect(votedAnecdote.votes).toBe(2)
    })
})