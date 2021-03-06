import React from 'react'
import {connect} from 'react-redux'
import {getEvents} from "../../state/event";

class Events extends React.Component {

    state = {
        inputValue: 'pl'
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.getEvents(this.state.inputValue)
    }

    handleChange = event => {
        this.setState({inputValue: event.target.value})
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
                    <select size='1' onChange={this.handleChange} value={this.state.inputValue}>
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
    getEvents: inputValue => dispatch(getEvents(inputValue))
})

const mapStateToProps = state => ({
    eventsData: state.event.eventsData
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Events)