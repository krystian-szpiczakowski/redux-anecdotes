import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch({
      type: 'VOTE',
      payload: { id }
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()

    const content = event.target.content.value
    event.target.content.value = ''

    const action = {
      type: 'NEW_ANECDOTE',
      payload: {
        content: content
      }
    }

    dispatch(action)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
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