import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {
  const state = [{
    content: 'If it hurts, do it more often',
    id: 1,
    votes: 0
  }]

  test('should returns new state with action VOTE', () => {
    const action = {
      type: 'VOTE',
      payload: {
        id: 1
      }
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toEqual([{
      content: 'If it hurts, do it more often',
      id: 1,
      votes: 1,
    }])
  })

  test('should returns new state with action NEW_ANECDOTE', () => {
    const action = {
      type: 'NEW_ANECDOTE',
      payload: {
        content: 'New anecdote about bubu.',
        id: 1,
        votes: 0
      }
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toHaveLength(2)
    expect(newState).toEqual(expect.arrayContaining([
      {
        content: 'New anecdote about bubu.',
        id: 1,
        votes: 0,
      }
    ]))
   })
})