import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotificationWithTime } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleOnSubmit = async (event) => {
    event.preventDefault()

    const content = event.target.content.value
    event.target.content.value = ''

    dispatch(createAnecdote(content))
    dispatch(setNotificationWithTime('You created a new anecdote'))
  }

  return <>
    <h2>create new</h2>
    <form onSubmit={handleOnSubmit}>
      <div><input name='content' /></div>
      <button>create</button>
    </form>
  </>
}

export default AnecdoteForm