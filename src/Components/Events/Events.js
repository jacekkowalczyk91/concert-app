import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from "../../state/events";

class Events extends React.Component {

    state = {
        value: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.getEvents(this.state.value)
    }

    handleChange = event => {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <form
                onSubmit={this.handleSubmit}>
                    <input
                        type='submit'
                        value='search'
                    />
                    <select size='1' name='locations' onChange={this.handleChange}>
                        <option value='pl'>Poland</option>
                        <option value='us'>United States</option>
                        <option value='ca'>Canada</option>
                        <option value='cn'>China</option>
                        <option value='au'>Australia</option>
                        <option value='es'>Spain</option>
                        <option value='fr'>France</option>
                    </select>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    getEvents: value => dispatch(getEvents(value))
})

const mapStateToProps = state => ({
    eventsData: state.events.eventsData
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Events)