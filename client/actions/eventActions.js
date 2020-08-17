export const openEvent = (eventId) => ({
    type: 'OPEN_EVENT',
    payload: eventId
})

export const closeEvent = () => ({
    type: 'CLOSE_EVENT',
    payload: ""
})

export const like = (userId,eventId) => ({
    type: 'LIKE',
    payload: [userId,eventId]
})
export const unLike = (userId,eventId) => ({
    type: 'UNLIKE',
    payload: [userId,eventId]
})

export const addCollectionCount = (eventId,number) => ({
    type: 'ADD_COLLECTION_COUNT',
    payload: [eventId,number]
})

