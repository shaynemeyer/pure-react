import React, { Component } from 'react';
import './App.css';

import Channels from './components/Channels';
import People from './components/People';
import Converstations from './components/Converstations'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChannel: 1,
      selectedPerson: -1,
    };
  }

  selectedChannel = (id) => {
    this.setState({
      selectedChannel:  id,
      selectedPerson: -1
    });
  };

  selectedPerson = (id) => {
    this.setState({
      selectedPerson:  id,
      selectedChannel: -1
    });
  };

  render() {
    let {selectedChannel, selectedPerson} = this.state;

    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 sidebar">
              <Channels onChannelChange={this.selectedChannel} selectedChannel={selectedChannel}/>
              <People onPersonChange={this.selectedPerson} selectedPerson={selectedPerson} />
            </div>
            <div className="col-sm-9 col-sm-offset-3 main">
              <Converstations selectedChannel={selectedChannel} selectedPerson={selectedPerson} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
