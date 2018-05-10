import React from 'react'
import {connect} from 'react-redux'

class EventsView extends React.Component {

    render() {

        const {eventsData} = this.props
        return (
            <div>
                {
                    console.log(eventsData.page.size)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    eventsData: state.event.eventsData
})

export default connect(mapStateToProps)(EventsView)