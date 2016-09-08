import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar';
import './index.css';

let HackerNews = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar/>
      </div>
    )
  }
});

ReactDOM.render(
  <HackerNews />,
  document.getElementById('root')
);
