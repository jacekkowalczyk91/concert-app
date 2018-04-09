import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
