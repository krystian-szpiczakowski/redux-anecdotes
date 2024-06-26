import { useDispatch, useSelector } from "react-redux"
import { initializeAnecdotes, vote } from "../reducers/anecdoteReducer"
import { setNotificationWithTime } from "../reducers/notificationReducer"
import { useEffect } from "react"

const AnecdoteList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [])

    const anecdotes = useSelector(state => state.anecdotes)
    const filterContent = useSelector(state => state.filter.content)
    
    const anecdotesByVotes = anecdotes.slice().sort((a, b) => b.votes - a.votes)
    const filteredAndSorted = anecdotesByVotes.filter(anecdote => anecdote.content?.toLowerCase().includes(filterContent?.toLowerCase()))

    const handleVote = (id) => {
        dispatch(vote(id))
        const title = anecdotes.find(anecdote => anecdote.id === id).content
        dispatch(setNotificationWithTime(`You voted for "${title}"`))
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