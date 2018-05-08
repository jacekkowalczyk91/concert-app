import React from 'react'
import {connect} from 'react-redux'

class EventsView extends React.Component {

    render() {
        return(
            <div>
                {
                    console.log(this.props.eventsData)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    eventsData: state.events.eventsData
})

export default connect(mapStateToProps)(EventsView)