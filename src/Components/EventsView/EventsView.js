import React from 'react'
import {connect} from 'react-redux'

class EventsView extends React.Component {


    render() {
        return(
            <div>
                {
                    this.props.eventsData && this.props.eventsData.map((event, index) => (
                        <div key={index}>
                            <p>{event.page}</p>

                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    eventsData: state.events.eventsData
})

export default connect(mapStateToProps)(EventsView)