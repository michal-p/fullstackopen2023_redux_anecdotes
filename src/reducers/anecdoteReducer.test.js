import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {
  test('returns new state with action VOTE', () => {
    const state = [{
      content: 'If it hurts, do it more often',
      id: 1,
      votes: 0
    }]
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
})