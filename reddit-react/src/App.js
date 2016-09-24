import React, { Component } from 'react';
import './App.css';
//import Item from './Item';
import {reddit} from './data/reactjs';

class App extends Component {
  renderContent() {
    return (
      <ul className="ItemPage-items">
        {reddit.map(item =>
          <li className="ItemPage-item">
            {data}
          </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
