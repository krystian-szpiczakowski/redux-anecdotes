import { useDispatch, useSelector } from "react-redux"

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterContent = useSelector(state => state.filter.content)
    
    const anecdotesByVotes = anecdotes.slice().sort((a, b) => b.votes - a.votes)
    const filteredAndSorted = anecdotesByVotes.filter(anecdote => anecdote.content?.toLowerCase().includes(filterContent?.toLowerCase()))

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
        <>
            {filteredAndSorted.map(anecdote =>
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
        </>
    )
}

export default AnecdoteList