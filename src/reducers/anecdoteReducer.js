import { createSlice } from "@reduxjs/toolkit"

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload.id
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      anecdoteToChange.votes += 1
    },
    createAnecdote(state, action) {
      const newAnecdote = asObject(action.payload.content)
      state.push(newAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export default anecdoteSlice.reducer
export const { vote, createAnecdote, setAnecdotes } = anecdoteSlice.actions