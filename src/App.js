import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Events from "./Components/Events/Events";
import EventsView from "./Components/EventsView/EventsView";
import SingleEventView from "./Components/SingleEventView/SingleEventView";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path='/' component={Events}/>
                    <Route exact path='/' component={EventsView}/>
                    <Route exact path='/SingleEventView' component={SingleEventView}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
