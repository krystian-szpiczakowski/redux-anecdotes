import { useDispatch } from "react-redux"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

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

    return <>
        <h2>create new</h2>
        <form onSubmit={handleOnSubmit}>
            <div><input name='content' /></div>
            <button>create</button>
        </form>
    </>
}

export default AnecdoteForm