import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(baseUrl, { 
    content,
    votes: 0
  })
  return response.data
}

const vote = async (id, updatedVotes) => {
  const response = await axios.patch(`${baseUrl}/${id}`, {votes: updatedVotes})
  return response.data
}

export default { getAll, createNew, vote }