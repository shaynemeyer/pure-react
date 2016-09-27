import React, { Component } from 'react';
import './App.css';
import {reddit} from './data/reactjs';
import Item from './Item';

class App extends Component {

  renderContent() {
    return (
      <ul className="ItemPage-items">
        {reddit.map(item =>
          <li className="ItemPage-item" key={item.data.id}>
            <Item itemData={item.data} />
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
