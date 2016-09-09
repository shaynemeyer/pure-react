import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Articles from './components/Articles';
import './index.css';

let HackerNews = React.createClass({
  render: function () {
    return (
      <div className="hacker-wrapper">
        <NavBar/>
        <Articles/>
      </div>

    )
  }
});

ReactDOM.render(
  <HackerNews />,
  document.getElementById('root')
);
