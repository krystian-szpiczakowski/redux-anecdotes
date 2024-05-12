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

  const createAnecdoteAction = content => {
    return {
      type: 'NEW_ANECDOTE',
      payload: { content }
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()

    const content = event.target.content.value
    event.target.content.value = ''
    
    dispatch(createAnecdoteAction(content))
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
      <h2>create new</h2>
      <form onSubmit={handleOnSubmit}>
        <div><input name='content' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App