const SET_EVENTS = 'event/SET_EVENTS'

const setEvents = eventsData => ({
    type: SET_EVENTS,
    eventsData: eventsData || {}
})
const APIKEY = 'isvxjalFjGmAQCYMDG0mBf9h73x8yJDQ'
const URL = `http://app.ticketmaster.com/discovery/v2/`

export const getEvents = SearchInput => dispatch => {
    fetch(`${URL}events.json?countryCode=${SearchInput}&apikey=${APIKEY}`)
        .then(response => response.json())
        .then(data => {
            dispatch(setEvents(data))
        })
}

const initialState = {
    eventsData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                eventsData: action.eventsData
            }
        default:
            return state
    }
}