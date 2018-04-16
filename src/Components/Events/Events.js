import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from "../../state/events";

class Events extends React.Component {

    state = {
        inputValue: ''
    }

    handleInputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.getEvents(this.state.inputValue)
    }

    render() {
        return (
            <div>
                <form
                onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type='submit'
                        value='search'
                    />
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    getEvents: inputValue => dispatch(getEvents(inputValue))
})

const mapStateToProps = state => ({
    eventsData: state.events.eventsData
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Events)