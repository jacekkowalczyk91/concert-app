import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router} from 'react-router-dom'
import Events from "./Components/Events/Events";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Events/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
