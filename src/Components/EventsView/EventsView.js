import React from 'react'
import {connect} from 'react-redux'
import './EventsView.css'

class EventsView extends React.Component {

    render() {

        const {eventsData} = this.props
        return (
            <div>
                {
                    eventsData !== null && eventsData._embedded.events.map(
                        (event, index) => (
                            <div key={index}>
                                <div className='events'>
                                    <p>{event.name}</p>
                                    <p>{event.dates.start.localDate}</p>
                                    <p>{event.dates.start.localTime}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    eventsData: state.event.eventsData
})

export default connect(mapStateToProps)(EventsView)