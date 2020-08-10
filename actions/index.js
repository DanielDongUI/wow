import data from '../data'

export const removeFromMyList = item => ({
    type: 'REMOVE_FROM_MYLIST',
    payload: item
})

export const addToMyList = item => ({
    type: 'ADD_TO_MYLIST',
    payload: item
})

export const fetch = () =>
  dispatch => {
    dispatch({
      type: "FETCH",
      payload: data
    })
  }
