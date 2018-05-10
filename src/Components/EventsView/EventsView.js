import React from 'react'
import {connect} from 'react-redux'

class EventsView extends React.Component {

    render() {

        const {eventsData} = this.props
        return (
            <div>
                {
                    eventsData !== null && eventsData._embedded.events.map(
                        (event, index) => (
                            <div key={index}>
                                <h1>{event.name}</h1>
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