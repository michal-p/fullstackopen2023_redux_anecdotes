import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const Anecdotes = () => {

  const dispatch = useDispatch()

  const anecdotes = useSelector(state => {
    // Order anecdotes by the number of votes descending order
    return state.sort((a, b) => b.votes - a.votes)
  })

  return (
    <>
    <h2>Anecdotes</h2>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
        </div>
      </div>
    )}
    </>
  )
}

export default Anecdotes