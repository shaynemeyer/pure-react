import React, { Component } from 'react';
import './App.css';
import {channels} from "./data/channels";
import {people} from "./data/people";
import {channel} from './data/channel_data';
import Channel from './components/Channel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-sm-3 left-column-theme">
          <div className="channels">
            <h2>CHANNELS</h2>
            <ul>
              {channels.map(item =>
                <Channel channel={item} />
              )}
            </ul>
          </div>
          <div className="people">
            <h2>PEOPLE</h2>
            <ul>
              {people.map(item =>
                <li className="list-item" key={item.id}>
                  # {item.name}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="col-sm-9">
          <ul>
            {channel.map(item =>
              <li className="channel-item">
                {item.user_name} {item.date} <br />
                {item.message}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
