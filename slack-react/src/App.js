import React, { Component } from 'react';
import './App.css';

import Channels from './components/Channels';
import People from './components/People';
import Converstations from './components/Converstations'

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 sidebar">
              <Channels/>
              <People />
            </div>
            <div className="col-sm-9 col-sm-offset-3 main">
              <Converstations />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
