import AnecdoteForm from './components/AnecdoteForm'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const anecdotesByVotes = anecdotes.slice().sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAction(id))
  }

  const voteAction = id => {
    return {
      type: 'VOTE',
      payload: { id }
    }
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesByVotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <AnecdoteForm />
    </div>
  )
}

export default App