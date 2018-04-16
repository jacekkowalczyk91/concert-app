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
                        type='submit'
                        value='search'
                    />
                    <select size='1' name='locations'>
                        <option value='pl'>Poland</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>China</option>
                        <option>Australia</option>
                        <option>Spain</option>
                        <option>France</option>
                    </select>
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