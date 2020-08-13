export const openEvent = (eventId) => ({
    type: 'OPEN_EVENT',
    payload: eventId
})

export const closeEvent = () => ({
    type: 'CLOSE_EVENT',
    payload: ""
})