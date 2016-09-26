import React, { Component } from 'react';
import './App.css';
//import Item from './Item';
import {reddit} from './data/reactjs';

class App extends Component {
  renderContent() {
    return (
      <ul className="ItemPage-items">
        {reddit.map(item =>
          <li className="ItemPage-item" key={item.data.id}>
            {item.data.title}<br/>

            ups: {item.data.ups} <br />

            num of comments: {item.data.num_comments} <br />

            created date: {item.data.created_utc} <br />

            author: {item.data.author} <br />
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
