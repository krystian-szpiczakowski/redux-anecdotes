import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterContent = useSelector(state => state.filter.content)
    
    const anecdotesByVotes = anecdotes.slice().sort((a, b) => b.votes - a.votes)
    const filteredAndSorted = anecdotesByVotes.filter(anecdote => anecdote.content?.toLowerCase().includes(filterContent?.toLowerCase()))

    const dispatch = useDispatch()

    const handleVote = (id) => {
        dispatch(vote({id}))
    }

    return (
        <>
            {filteredAndSorted.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList